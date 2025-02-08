// import React from 'react'

import { CalendarOutlined, EnvironmentOutlined, StarFilled, UsergroupAddOutlined } from "@ant-design/icons"
import { Image_URL } from "../../../utils"
import dummyimg from '../../../assets/packages/tours-18.jpg'
import PropTypes from "prop-types"

const PackageLayoutFive = ({data}) => {
    return (
        <>
            <div className="w-full overflow-hidden rounded-xl bg-white shadow shadow-black/40">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <figure className="w-full h-full">
                            <img src={data.main_image ? Image_URL + "assets/images/" + data.main_image : dummyimg}  onError={(e) => e.target.src = dummyimg} alt="" className="w-full h-full max-h-[270px]" />
                        </figure>
                    </div>
                    <div className="col-span-6 ">
                        <div className="w-full px-4 pt-8 flex flex-col gap-5" >
                        <div className="pb-3 grid grid-cols-2 border-b border-blue-gray-200">
                        <div className="col-span-1">
                            <div className="flex gap-1 ">
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
                                <span className="inline-block px-4 py-1  rounded-full bg-primary text-white text-xs">Featured</span>
                            </div>
                        </div>
                    </div>
                            <div className="w-full">
                                <h4 className='text-lg font-semibold text-black'>
                                    Rainbow Mountain Valley
                                </h4>
                                <div className="w-full mb-2">
                                    <span>
                                        <EnvironmentOutlined />
                                    </span>
                                    <span>Barcelona, Spain</span>
                                </div>
                                <p className='text-gray-800 text-xs tracking-widest'>
                                    Here we will write short descrition to each package which will be added from backend admin panel
                                </p>
                            </div>
                            <div className="w-full border-t border-gray-500">
                                <div className="grid grid-cols-2 gap-2 py-3">
                                    <div className="col-span-1">
                                        <div className="flex text-sm">
                                            <CalendarOutlined />
                                            <span>
                                                4 Day, 3 Nights
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-end">
                                        <div className="inline-flex text-sm">
                                            <UsergroupAddOutlined />
                                            <span>
                                                12 Guests
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
    data : PropTypes.object
}