// import React from 'react'

import { CalendarOutlined, EnvironmentOutlined, UsergroupAddOutlined } from "@ant-design/icons"

const PackageLayoutFive = () => {
    return (
        <>
            <div className="w-full overflow-hidden rounded-xl bg-white shadow shadow-black/40">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <figure className="w-full">
                            <img src="https://modactivity.travelerwp.com/wp-content/uploads/2022/04/New-Jersey-400x400.jpg" alt="" className="w-full" />
                        </figure>
                    </div>
                    <div className="col-span-6 ">
                        <div className="w-full px-4 pt-3">
                            <div className="w-full">
                                <h4 className='text-lg font-bold text-black'>
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