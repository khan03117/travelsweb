// import React from 'react'

import { CalendarOutlined, EnvironmentOutlined, StarFilled, UsergroupAddOutlined } from "@ant-design/icons"
import { WEB_Image_URL } from "../../../utils"
import dummyimg from '../../../assets/packages/tours-18.jpg'
import PropTypes from "prop-types"

const PackageLayoutFive = ({ data }) => {
    return (
        <>
            <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow shadow-black/40">
                <div className="grid grid-cols-12  h-auto">
                    <div className="col-span-6">
                        <figure className="w-full h-full">
                            <img src={data.main_image ? WEB_Image_URL + "assets/images/" + data.main_image : dummyimg} onError={(e) => e.target.src = dummyimg} alt="" className="w-full h-full  lg:max-h-[290px] max-h-[220px]" />
                        </figure>
                    </div>
                    <div className="col-span-6 ">
                        <div className="w-full h-full lg:px-4 px-2 lg:pt-8 pt-2 flex flex-col lg:gap-5 gap-2" >
                            <div className="pb-3 grid grid-cols-2 border-b border-blue-gray-200">
                                <div className="col-span-1">
                                    <div className="flex lg:gap-1 gap-0 ">
                                        <span className="text-sm text-orange-400">
                                            <StarFilled />
                                        </span>
                                        <span className="text-sm text-orange-400">
                                            <StarFilled />
                                        </span>
                                        <span className="text-sm text-orange-400">
                                            <StarFilled />
                                        </span>
                                        <span className="text-sm text-orange-400">
                                            <StarFilled />
                                        </span>
                                        <span className="text-sm text-orange-400">
                                            <StarFilled />
                                        </span>

                                        <span className="text-xs">
                                            (4)
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="text-end">
                                        <span className="inline-block lg:px-4 px-2 py-1  rounded-full bg-primary text-white text-xs">Featured</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className='lg:text-lg text-sm font-semibold text-black'>
                                    {data?.package_title ?? 'Package Title Not Available'}
                                </h4>
                                <div className="w-full mb-2 lg:text-md text-xs">
                                    <span>
                                        <EnvironmentOutlined />
                                    </span>
                                    <span className="capitalize">{data?.state?.state} , {data?.state?.country?.country.toLowerCase()}</span>
                                </div>
                                <p className='text-gray-800 text-xs hidden tracking-widest'>
                                    Here we will write short descrition to each package which will be added from backend admin panel
                                </p>
                            </div>
                            <div className="w-full border-t border-gray-500">
                                <div className="grid grid-cols-2 gap-2 py-3">
                                    <div className="col-span-1">
                                        <div className="flex text-sm">
                                            <CalendarOutlined />
                                            <span className="lg:ms-3 ms-1">
                                            {data?.days + ' D ' + data?.nights + ' N'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-end">
                                        <div className="flex gap-0 text-sm">
                                            <UsergroupAddOutlined />
                                            <span className="text-nowrap">
                                                12 Guests
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pb-5">
                                <button className="px-3 lg:py-2 py-1 lg:text-md text-xs rounded-full w-full bg-[var(--primary)] text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PackageLayoutFive


PackageLayoutFive.propTypes = {
    data: PropTypes.object
}