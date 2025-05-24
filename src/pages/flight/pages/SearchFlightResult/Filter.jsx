//import React from 'react'

import { Checkbox } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { IoPartlySunnyOutline, IoSunnyOutline } from "react-icons/io5";
import { BsCloudMoon } from "react-icons/bs";
import { JS_BASE_URL } from "../../../../utils";
// import { JS_BASE_URL } from "../../Utils";

const Filter = ({ handleStops, airlines = [], handleDepartures, handleArrivals, selectedAt, selectedDt, handleAirline, selectedAirline }) => {

    const timefilter = [
        {
            title: "Before 6AM",
            icon: <IoPartlySunnyOutline />
        },
        {
            title: "6AM - 12PM",
            icon: <IoSunnyOutline />
        },
        {
            title: "12PM - 6PM",
            icon: <IoPartlySunnyOutline />
        },
        {
            title: "After 6PM",
            icon: <BsCloudMoon />
        }
    ];
    const [stops, setStops] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const fltrr = [
        {
            title: "Nonstop",
            value: 0
        },
        {
            title: "1 Stop",
            value: 1
        },
        {
            title: "2 Stop",
            value: 2
        },
        {
            title: "2+ Stop",
            value: 3
        }
    ];
    const addToStopFilter = (id) => {
        if (stops.includes(id)) {
            setStops(stops.filter((stop) => stop !== id));
        } else {
            setStops([...stops, id]);
        }
    }
    const toggleTime = (time, type) => {     
        const handler = type === 'departure' ? handleDepartures : handleArrivals;
        const selected = type === 'departure' ? selectedDt : selectedAt;    
        const updated = selected.includes(time)
          ? selected.filter(t => t !== time)
          : [...selected, time];    
        handler(updated);
      };
      const toggleAirline = (code) => {
        const updated = selectedAirline.includes(code)
          ? selectedAirline.filter(c => c !== code)
          : [...selectedAirline, code];
       
        handleAirline(updated);
      };
    useEffect(() => {
        handleStops(stops);
    }, [stops]);
    return (
        <>
            <div className="w-full border border-gray-400 p-3 bg-white rounded-lg">
                <div className="w-full border-b border-gray-400">
                    <h1 className="text-black text-lg font-bold">Filter</h1>
                </div>
                <h1 className="text-black text-sm font-bold py-2">Stops</h1>
                <ul className="*:py-1 flex !p-0 !m-0 *:text-sm">
                    {
                        [...fltrr].map((itm) => (
                            <>
                                <li onClick={() => addToStopFilter(itm.value)} className={`w-[100px] ${stops.includes(itm.value) ? 'bg-blue-500 text-white border-gray-100' : 'border-gray-500 '} cursor-pointer border  border-e-0 last:border-e`}>
                                    <div className="size-full text-center">
                                        <p>{itm.value}</p>
                                        <p>Stops</p>
                                    </div>
                                </li>
                            </>
                        ))
                    }
                </ul>
                <div>
                    <h1 className="text-black text-sm font-bold py-2">Airlines</h1>
                    <ul className="*:py-1 *:text-sm">
                        {
                            [...airlines].map((itm) => (
                                <>
                                    <li>
                                        <Checkbox checked={selectedAirline.includes(itm.code)}  onClick={() => toggleAirline(itm.code)} color="blue"  value={itm.code} label={
                                            <>
                                                <div className="inline-flex gap-2">
                                                    <img className='size-8' src={JS_BASE_URL + 'logos/' + itm.code + '.png'} alt='image' />
                                                    <span>{itm.name}</span>
                                                </div>
                                            </>
                                        } />

                                    </li>
                                </>
                            ))
                        }
                    </ul>

                </div>
                <div>
                    <h1 className="text-black text-sm font-bold py-2">Departure</h1>
                    <ul className="flex">
                        {
                            timefilter.map((itm) => (
                                <>
                                    <li onClick={() => toggleTime(itm.title, "departure")} className={`text-xs ${selectedDt.includes(itm.title) ? 'bg-blue-500 border-white text-white ' : ' border-gray-500'} cursor-pointer border border-e-0 last:border py-3 w-[100px]`}>
                                        <div className="size-full text-center">
                                            <div className="icon flex mb-2 justify-center text-2xl">
                                                {itm.icon}
                                            </div>
                                            <p className=" font-bold text-xs">
                                                {itm.title}
                                            </p>
                                        </div>
                                    </li>
                                </>
                            ))
                        }
                    </ul>

                </div>
                <div>
                    <h1 className="text-black text-sm font-bold py-2">Arrival</h1>
                    <ul className="flex">
                        {
                            timefilter.map((itm) => (
                                <>
                                    <li onClick={() => toggleTime(itm.title, "arrival")} className={`text-xs ${selectedAt.includes(itm.title) ? 'bg-blue-500 text-white border-white' : 'border-gray-500'} cursor-pointer border  border-e-0 last:border py-3 w-[100px]`}>
                                        <div className="size-full text-center">
                                            <div className="icon flex mb-2 justify-center text-2xl">
                                                {itm.icon}
                                            </div>
                                            <p className=" font-bold text-xs">
                                                {itm.title}
                                            </p>
                                        </div>
                                    </li>
                                </>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </>
    )
}
Filter.propTypes = {
    fltrr: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired,
    handleStops: PropTypes.func,
    airlines: PropTypes.array,
    handleDepartures : PropTypes.array,
    handleArrivals : PropTypes.array, 
    selectedAt : PropTypes.array,
    selectedDt : PropTypes.array,
    handleAirline : PropTypes.func,
    selectedAirline : PropTypes.array,


}
export default Filter