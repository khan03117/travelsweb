import React, { useState } from 'react'

import axios from "axios";
import Filter from "./Filter"
import SingleFlightResBox from "./SingleFlightResBox"

import airplane from '../../../../assets/airplane.gif';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { JS_API_URL } from '../../../../utils';
import SearchFlightComponent from '../Home/components/SearchFlightComponent';
import { Collapse } from '@material-tailwind/react';
import { useUser } from '../../../Account/UserContext';





const SearchFlightsRes = () => {
    // const location = useLocation();
    // const searchData = location.state;
    const {user} = useUser();
    const [onwards, setOnwards] = React.useState([]);
    const [returns, setReturns] = React.useState([]);
    const [comobs, setCombos] = React.useState([]);
    const [multies, setMulties] = React.useState({});
    const searchdata = JSON.parse(localStorage.getItem('search'));
    const { data, trip, isInt } = searchdata;
    const [pid, setPid] = React.useState('');
    const [rpid, setRpid] = React.useState('');
    const [allow, setAllow] = React.useState(false);
    const [isloading, setIsLoading] = React.useState(true);
    const [routeid, setRouteId] = React.useState(0);
    const [pids, setPids] = React.useState([]);
    const [airlines, setAirlines] = useState([]);
    const [pdarr, setPdarr] = useState([]);
    const [selectedAirline, setSelectAirline] = useState([]);
    const [stops, setStops] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [dt, setDt] = useState(["Before 6AM", "6AM - 12PM", "12PM - 6PM", "After 6PM"]);
    const [at, setAt] = useState(["Before 6AM", "6AM - 12PM", "12PM - 6PM", "After 6PM"]);
    const [open, setOpen] = useState(false);




    const handleFilter = () => {
        setOpen(true);
    }
    const setAllPid = (id) => {
        const prr = [...pdarr];
        const isExists = prr.find(obj => obj.rid == routeid);
        if (isExists) {
            const index = prr.indexOf(isExists);
            prr[index].p_id = id;
            setPdarr(prr);
        } else {
            const newobj = { rid: routeid, p_id: id };
            prr.push(newobj);
            setPdarr([...prr]);
        }
        const arr = [...prr];
        const filtered_pids = arr.map(obj => (obj.p_id));
        setPids(filtered_pids);
    }
    const navigate = useNavigate();
    const handleStops = (arr) => {
        setStops(arr);
    }
    const set_allow = () => {
        if (trip == 1 && pid) {
            setAllow(true);
        }
        if (trip == 2) {
            if (pid && rpid) {
                setAllow(true);
            }
        }
        if (trip == 3 && !isInt) {
            if (data.searchQuery.routeInfos.length == pids.length) {
                setAllow(true);
            }
        }
    }
    React.useEffect(() => {
        set_allow();
    }, [pid, rpid, pids]);

 const [copen, setCOpen] = React.useState(false);
 const toggleOpen = () => setCOpen((cur) => !cur);

    const searchFlight = async () => {
        setIsLoading(true)
        const agency = {
            username : user.user.email,
            name  : user.user.name,
            admin : user.admin.name,
            user_id : user.user.id,
            admin_id : user.admin.id
        }
        const resp = await axios.post(JS_API_URL + "search-query", { searchQuery: data, is_international: isInt, agency : agency });
        const { searchResult } = resp.data.data;
        const search_id = resp.data.search_id;
        localStorage.setItem('search_id', search_id._id);
        const { tripInfos } = searchResult;
        const airlineNames = [];
        if (trip === 1) {
            setOnwards(tripInfos.ONWARD || []);
            tripInfos.ONWARD.forEach(onward => {
                onward.sI.forEach(segment => {
                    if (segment.fD && segment.fD.aI && segment.fD.aI.code) {
                        airlineNames.push({ code: segment.fD.aI.code, name: segment.fD.aI.name });
                    }
                });
            });
        } else if (trip === 2) {
            setOnwards(tripInfos.ONWARD || []);
            setReturns(tripInfos.RETURN || []);
            tripInfos.ONWARD.forEach(onward => {
                onward.sI.forEach(segment => {
                    if (segment.fD && segment.fD.aI && segment.fD.aI.code) {
                        airlineNames.push({ code: segment.fD.aI.code, name: segment.fD.aI.name });
                    }
                });
            });
            tripInfos.RETURN.forEach(onward => {
                onward.sI.forEach(segment => {
                    if (segment.fD && segment.fD.aI && segment.fD.aI.code) {
                        airlineNames.push({ code: segment.fD.aI.code, name: segment.fD.aI.name });
                    }
                });
            });
        } else if (trip === 3 && isInt) {
            setCombos(tripInfos.COMBO || []);
            tripInfos.COMBO.forEach(onward => {
                onward.sI.forEach(segment => {
                    if (segment.fD && segment.fD.aI && segment.fD.aI.code) {
                        airlineNames.push({ code: segment.fD.aI.code, name: segment.fD.aI.name });
                    }
                });
            });
        } else if (trip === 3) {
            Object.values(tripInfos).forEach(tripArray => {
                tripArray.forEach(onward => {
                    onward.sI.forEach(segment => {
                        if (segment.fD && segment.fD.aI && segment.fD.aI.code) {
                            airlineNames.push({ code: segment.fD.aI.code, name: segment.fD.aI.name });
                        }
                    });
                });
            });
            setMulties(tripInfos);
        }


        const uniqueAirlinesMap = new Map();

        airlineNames.forEach(airline => {
            const key = `${airline.code}-${airline.name}`;
            if (!uniqueAirlinesMap.has(key)) {
                uniqueAirlinesMap.set(key, airline);
            }
        });
        const uniqueAirlines = Array.from(uniqueAirlinesMap.values());
        setAirlines(uniqueAirlines);
        setSelectAirline(uniqueAirlines.map(itm => itm.code));
        setIsLoading(false)
    }
    const filterFlights = (flights, { stops, sairlines = [], departureTimes, arrivalTimes = [] }) => {
        return flights.filter(flight => {
            const stopCount = flight.sI.length - 1;
            const matchesStops = stops.length === 0 || stops.includes(stopCount);
            const matchesAirline = sairlines.length === 0 ||
                flight.sI.some(seg => sairlines.includes(seg.fD.aI.code));
            const depHour = parseInt(flight.sI[0].dt.split("T")[1].split(":")[0]);
            const matchesDeparture = departureTimes.length === 0 || departureTimes.some(time => {
                if (time === "Before 6AM") return depHour < 6;
                if (time === "6AM - 12PM") return depHour >= 6 && depHour < 12;
                if (time === "12PM - 6PM") return depHour >= 12 && depHour < 18;
                if (time === "After 6PM") return depHour >= 18;
            });
            const arrHour = parseInt(flight.sI.at(-1).at.split("T")[1].split(":")[0]);
            const matchesArrival = arrivalTimes.length === 0 || arrivalTimes.some(time => {
                if (time === "Before 6AM") return arrHour < 6;
                if (time === "6AM - 12PM") return arrHour >= 6 && arrHour < 12;
                if (time === "12PM - 6PM") return arrHour >= 12 && arrHour < 18;
                if (time === "After 6PM") return arrHour >= 18;
            });
            return matchesStops && matchesAirline && matchesDeparture && matchesArrival;
        });
    };

    React.useEffect(() => {
        searchFlight();

    }, []);



    if (!data.searchQuery.paxInfo) {
        return <div>Loading...</div>
    }
    const bookflight = () => {
        if (allow) {
            if (trip != 3) {
                let ids = pid;
                if (rpid) {
                    ids = ids + ',' + rpid;
                }
                navigate('/review/' + ids);
            }
            if (trip == 3 && !isInt) {
                const allpids = pids.join(',');
                navigate('/review/' + allpids);
            }

        } else {
            alert('No allowed')
        }
    }

    return (
        <>
            {
                isloading ? (
                    <>
                        <div className='p-10 text-center overflow-hidden flex justify-center'>

                            <img src={airplane} alt="" className="max-w-[400px]  mx-auto inline-block" />
                        </div>
                    </>
                )
                    : (
                        <>

                            <div className={`fixed top-0 transition-all duration-1000 ${open ? 'block w-full' : 'hidden w-0'} start-0  h-lvh bg-gray-200 z-[99999]`}>
                                <button onClick={() => setOpen(false)} className='absolute top-0 end-0 size-10 rounded-full'>
                                    <CloseOutlined />
                                </button>
                                <div className="w-full">
                                    <Filter
                                        airlines={airlines}
                                        handleStops={handleStops}
                                        handleDepartures={setDt}
                                        handleArrivals={setAt}
                                        selectedAt={at}
                                        selectedDt={dt}
                                        handleAirline={setSelectAirline}
                                        selectedAirline={selectedAirline}
                                    />
                                </div>
                            </div>
                            {
                                !isloading && (
                                    <>
                                    
                                        <section className='bg-[var(--primary)] py-5'>
                                            <div className="container mx-auto">
                                                <div className="w-full text-end p-2">
                                                    <button onClick={toggleOpen} className='px-4 py-2 text-xs border border-white text-white'>Modify Search</button>
                                                </div>
                                                <Collapse open={copen}>
                                               
                                                <div className="w-full">
                                                    <SearchFlightComponent />
                                                </div>
                                                 </Collapse>
                                            </div>
                                        </section>

                                    </>
                                )
                            }

                            <section className="bg-[#e8f2fa] py-2 px-5">
                                <div className="container mx-auto">
                                    <div className="w-full">
                                        <div className="w-full">


                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="lg:col-span-3 lg:block hidden col-span-12 sticky top-0">
                                            <Filter
                                                airlines={airlines}
                                                handleStops={handleStops}
                                                handleDepartures={setDt}
                                                handleArrivals={setAt}
                                                selectedAt={at}
                                                selectedDt={dt}
                                                handleAirline={setSelectAirline}
                                                selectedAirline={selectedAirline}
                                            />
                                        </div>
                                        <div className="lg:col-span-9 col-span-12">
                                            <div className="w-full">

                                                <div className="w-full">
                                                    <div className="w-full flex flex-wrap gap-4 items-center *:text-nowrap *:text-sm" >
                                                        {
                                                            [...data.searchQuery.routeInfos].map((route, index) => (
                                                                <>
                                                                    <button className={`p-2 ${routeid == index ? 'bg-primary text-white' : 'bg-gray-300 text-black'}`} onClick={() => setRouteId(index)}>
                                                                        {route.fromCityOrAirport.code} <ArrowRightOutlined /> {route.toCityOrAirport.code}
                                                                    </button>
                                                                </>
                                                            ))
                                                        }
                                                        <button onClick={handleFilter} className='bg-orange-500 rounded text-xs px-2 py-1'>
                                                            Filter
                                                        </button>
                                                    </div>

                                                    <div className={`grid gap-2 ${trip == 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                        {
                                                            trip != 3 && routeid == 0 && (
                                                                <div className="col-span-1">
                                                                    {

                                                                        (
                                                                            <>
                                                                                {
                                                                                    filterFlights(onwards, { stops, sairlines: selectedAirline, departureTimes: dt, arrivalTimes: at }).map((flight) => (
                                                                                        <>
                                                                                            <SingleFlightResBox  isInt={isInt} _pid={[pid]} name="onwards" handlepid={setPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                        )
                                                                    }
                                                                </div>
                                                            )}
                                                        {
                                                            trip == 2 && routeid == 1 && (
                                                                <>

                                                                    <div className="col-span-1">
                                                                        {
                                                                            returns.filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                                <>
                                                                                    <SingleFlightResBox isInt={isInt} _pid={[rpid]} name="return" handlepid={setRpid} flight={flight} paxinfo={data.searchQuery.paxInfo} />
                                                                                </>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        <div className="col-span-1">
                                                            {
                                                                ((trip == 3 && !isInt) && Object.values(multies).length > 0) && Object.values(multies)[routeid].filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                    <>
                                                                        <SingleFlightResBox isInt={isInt} _pid={pids} name={'multi'} handlepid={setAllPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />

                                                                    </>
                                                                ))
                                                            }
                                                            {
                                                                (trip == 3 && isInt) && comobs.filter(obj => stops.includes(obj.sI.length - 1)).map((flight) => (
                                                                    <>
                                                                        <SingleFlightResBox isInt={isInt} _pid={pids} name={'multi'} handlepid={setAllPid} paxinfo={data.searchQuery.paxInfo} flight={flight} />

                                                                    </>
                                                                ))
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            {
                                allow && (
                                    <>
                                        <section className="fixed z-[109999] bottom-0 start-0 w-full bg-primary p-4">
                                            <div className="flex justify-between">
                                                <div></div>
                                                <button onClick={bookflight} className="bg-white text-primary px-4 py-2 rounded shadow-sm shadow-white/40">Book Now</button>
                                            </div>
                                        </section>
                                    </>
                                )
                            }
                        </>
                    )
            }


        </>
    )
}

export default SearchFlightsRes