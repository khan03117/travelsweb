import React from 'react'

import { SearchOutlined, StarFilled } from "@ant-design/icons"
import { Checkbox } from "@material-tailwind/react"
import HotelList from "./HotelList"
import axios from 'axios'

import { useParams } from 'react-router-dom'
import { JS_API_URL } from '../../utils'


const HotelLists = () => {
    const { id } = useParams();
    const [items, setItems] = React.useState({});
    const gethotels = async () => {
        try {
            const resp = await axios.post(JS_API_URL + "hotel/search-id", { searchId: id });
            setItems(resp.data.data);
            console.log(resp);

        } catch (err) {
            console.log(err);
        }
    }
    React.useEffect(() => {
        gethotels();
    }, []);
    return (
        <section className='bg-[#e8f2fa] py-2 px-5'>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <div className="w-full">
                            <p className="text-[#2196f3] text-sm">Home <span className="text-[#3a3a3a]">Bangalore, India Hotels (3121) </span></p>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1 text-end">
                        <div className="w-full flex gap-4">
                            <div className="flex border border-gray-400 rounded-lg px-5 py-2 bg-white gap-2">
                                <button><SearchOutlined /></button>
                                <input type="text" placeholder="Enter hotel name or location" className="outline-none text-sm" />
                            </div>
                            <div>
                                <select className="px-5 py-3 rounded-lg border border-gray-400 outline-none text-sm">
                                    <option value="">Popularity</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3">
                        <div className="w-full rounded-lg bg-white border border-gray-400 p-5">
                            <h1 className=" border-b border-gray-400 text-xl font-bold">Filter By</h1>
                            <div className="grid grid-cols-1">
                                <div className="col-span-1">
                                    <div className="w-full">
                                        <div className="w-full flex justify-between py-3 items-center">
                                            <h1 className="text-lg font-bold">Price</h1>
                                            <p className="text-primary text-sm">Clear All</p>
                                        </div>
                                        <ul className="*:py-1">
                                            {
                                                [1, 2, 3, 4].map((itm) => (
                                                    <>
                                                        <li>
                                                            <Checkbox label={itm * 1000} />
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full">
                                        <div className="w-full flex justify-between py-3 items-center">
                                            <h1 className="text-lg font-bold">Review Score</h1>
                                            <p className="text-primary text-sm">Clear All</p>
                                        </div>
                                        <ul className="*:py-1">
                                            {
                                                [5, 4, 3, 2, 1].map((itm) => (
                                                    <>
                                                        <li>

                                                            <Checkbox className="text-yellow-900" label={

                                                                [...Array(itm)].map(() => (
                                                                    <>
                                                                        <StarFilled className="text-yellow-800" />
                                                                    </>
                                                                ))

                                                            } />
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full">
                                        <div className="w-full flex justify-between py-3 items-center">
                                            <h1 className="text-lg font-bold">Property Type</h1>
                                            <p className="text-primary text-sm">Clear All</p>
                                        </div>
                                        <ul className="*:py-1">
                                            {
                                                [1, 2, 3].map((itm) => (
                                                    <>
                                                        <li>
                                                            <Checkbox label={itm * 1000} />
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="w-full">
                                        <div className="w-full flex justify-between py-3 items-center">
                                            <h1 className="text-lg font-bold">Hotel Services</h1>
                                            <p className="text-primary text-sm">Clear All</p>
                                        </div>
                                        <ul className="*:py-1">
                                            {
                                                [1, 2, 3].map((itm) => (
                                                    <>
                                                        <li>
                                                            <Checkbox label={itm * 1000} />
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-9">
                        {
                            items.searchResult?.his.map(itm => (
                                <>
                                    <div className="w-full bg-white border border-gray-400 p-5 rounded-lg mt-3">

                                        <HotelList detail={itm} />
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelLists