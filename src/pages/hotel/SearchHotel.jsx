
import React from 'react'
import FromFieldHotel from "./FromFieldHotel";
import CalendarPopup from "./CalendarPopup";

import moment from 'moment/moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CountBox from '../../components/CountBox';
import { JS_API_URL } from '../../utils';
import LabelSearch from '../flight/pages/Home/LabelSearch';
import Loading from '../../components/Loading';


const SearchHotel = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    }
    const [topen, setTOpen] = React.useState(false);
    const toggleDialogTraveller = () => {
        setTOpen(!topen);
    }
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [rooms, setRooms] = React.useState([{ numberOfAdults: 1, numberOfChild: 0, childAge: [] }]);
    const handleIncrement = (type, index) => {
        setRooms(prevRooms => {
            const updatedRooms = [...prevRooms];
            const currentRoom = updatedRooms[index];

            if (type === 'adults' && currentRoom.numberOfAdults < 3) {
                updatedRooms[index] = {
                    ...currentRoom,
                    numberOfAdults: currentRoom.numberOfAdults + 1,
                };
            }

            if (type === 'children' && currentRoom.numberOfChild < 3) {
                updatedRooms[index] = {
                    ...currentRoom,
                    numberOfChild: currentRoom.numberOfChild + 1,
                    childAge: [...currentRoom.childAge, 1],
                };
            }

            return updatedRooms;
        });
    };
    const handleDateClick = (date) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(date);
            setEndDate(null);
        } else if (date < startDate) {
            setStartDate(date);
            setEndDate(null);
        } else {
            setEndDate(date);
        }
    };

    const handleDecrement = (type, index) => {
        setRooms(prevRooms => {
            const updatedRooms = [...prevRooms];
            const currentRoom = updatedRooms[index];

            if (type === 'adults' && currentRoom.numberOfAdults > 1) {
                updatedRooms[index] = {
                    ...currentRoom,
                    numberOfAdults: currentRoom.numberOfAdults - 1,
                };
            }

            if (type === 'children' && currentRoom.numberOfChild > 0) {
                updatedRooms[index] = {
                    ...currentRoom,
                    numberOfChild: currentRoom.numberOfChild - 1,
                    childAge: currentRoom.childAge.slice(0, -1),
                };
            }

            return updatedRooms;
        });
    };

    const handleAddRoom = () => {
        // Create a new room with default values
        const newRoom = { numberOfAdults: 1, numberOfChild: 0, childAge: [] };

        // Update state by adding the new room to the existing rooms array
        setRooms(prevRooms => [...prevRooms, newRoom]);
    };
    const handleRemoveRoom = (index) => {
        setRooms(prevRooms => {
            // Remove the room at the given index
            return prevRooms.filter((_, i) => i !== index);
        });
    };
    const handleAgeChange = (index, childIndex, age) => {
        setRooms(prevRooms => {
            const updatedRooms = [...prevRooms];
            const currentRoom = updatedRooms[index];

            // Update the age for the specific child in the current room
            currentRoom.childAge[childIndex] = age;

            updatedRooms[index] = { ...currentRoom };

            return updatedRooms;
        });
    }
    const getSearchId = async () => {
        try {
            setLoading(true);
            const searchdata = {
                "searchQuery": {
                    "checkinDate": moment(startDate).format('YYYY-MM-DD'),
                    "checkoutDate": moment(endDate).format('YYYY-MM-DD'),
                    "roomInfo": rooms,
                    "searchCriteria": {
                        "city": "1024",
                        "currency": "INR",
                        "nationality": "106"
                    },
                    "searchPreferences": {
                        "ratings": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5
                        ],
                        "fsc": false
                    }
                },
                "sync": true
            }
            const resp = await axios.post(JS_API_URL + "hotel/search", { searchQuery: searchdata });
            if (resp.data.success == 1) {
                const response = resp.data.data.searchIds[0];
                setLoading(false);
                navigate('/hotel-list/'+response)
            }
               setLoading(false);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <CalendarPopup handleDateClick={handleDateClick} startDate={startDate} endDate={endDate} open={open} toggleDialog={toggleDialog} />
            <section className='py-10 mb-40 relative'>
                {
                    loading && (
                        <>
                            <Loading/>
                        </>
                    )
                }
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <div className="w-full min-h-12 border border-gray-300 rounded">
                                <FromFieldHotel label="Where are you going ?" />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div onClick={toggleDialog} className="w-full cursor-pointer rounded  border border-gray-300 p-4">
                                <LabelSearch label="CheckIn-Checkout" />
                                <button className="w-full cursor-pointer  h-full">
                                    {startDate ? moment(startDate).format('DD-MM-YYYY') : '—'} to {endDate ? moment(endDate).format('DD-MM-YYYY') : '—'}
                                </button>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="w-full relative">
                                <div onClick={toggleDialogTraveller} className="w-full  rounded min-h-16 border p-4 cursor-pointer border-gray-300">
                                    <LabelSearch label='Travellers' />
                                    <div className="w-full">
                                        {rooms.length} Rooms, {rooms.flatMap(rm => rm.numberOfAdults).reduce((sum, total) => sum + total)}  Adults,
                                        {rooms.flatMap(rm => rm.numberOfChild).reduce((sum, total) => sum + total)}  Childs
                                    </div>
                                </div>
                                <div className={`w-full ${topen ? " translate-y-0 opacity-100" : "translate-y-56 opacity-0"} transition-all duration-1000 relative top-full left-0 p-3 bg-gray-200/75`}>
                                    {
                                        topen && (
                                            <>
                                                <div className="w-full">


                                                    {
                                                        rooms.map((rm, index) => (
                                                            <React.Fragment key={index}>
                                                                <div key={'hotel' + index} className="w-full">
                                                                    <h4 className="text-orange-500">Room {index + 1}</h4>
                                                                    <div className="flex justify-between mb-4">
                                                                        <div className="text-sm">
                                                                            Adults
                                                                        </div>
                                                                        <div>
                                                                            <CountBox
                                                                                count={rm.numberOfAdults}
                                                                                digitshow={true}
                                                                                onIncrement={() => handleIncrement('adults', index)}
                                                                                onDecrement={() => handleDecrement('adults', index)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-between mb-4">
                                                                        <div className="text-sm">
                                                                            Children
                                                                        </div>
                                                                        <div>
                                                                            <CountBox
                                                                                count={rm.numberOfChild}
                                                                                digitshow={true}
                                                                                onIncrement={() => handleIncrement('children', index)}
                                                                                onDecrement={() => handleDecrement('children', index)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="block">
                                                                        <h5 className="text-sm">Age of Child</h5>
                                                                        <div className="flex gap-2">
                                                                            {
                                                                                [...Array(rm.numberOfChild)].map((_, childindex) => (
                                                                                    <>
                                                                                        <select value={rm.childAge[childindex] || 1} onChange={(e) => handleAgeChange(index, childindex, e.target.value)} id="" className="w-10 outline-none border border-blue-gray-300">
                                                                                            {
                                                                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(ag => (
                                                                                                    <>
                                                                                                        <option value={ag}>{ag}</option>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                                        </select>
                                                                                    </>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full flex justify-between my-3">
                                                                        {
                                                                            (index + 1 == rooms.length) && (
                                                                                <>
                                                                                    <button onClick={handleAddRoom} className="text-orange-500 rounded px-5 py-1 border border-orange-400 text-xs">Add Room</button>

                                                                                </>
                                                                            )
                                                                        }
                                                                        {
                                                                            index > 0 && (
                                                                                <>
                                                                                    <button onClick={() => handleRemoveRoom(index)} className="text-red-400 rounded px-5 py-1 border border-red-400 text-xs">Remove Room</button>

                                                                                </>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="w-full h-full mt-5">
                                <button onClick={getSearchId} className="rounded-full  px-10 text-xs  uppercase py-2 bg-primary text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchHotel