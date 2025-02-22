// import React from 'react'

import { CalendarOutlined, EnvironmentOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Image_URL } from "../../../utils"
import PropTypes from "prop-types"
// import { Button } from "@material-tailwind/react"

const PackageLayoutFour = ({ data }) => {
    return (
        <>
            <div className="w-full overflow-hidden rounded-xl bg-white shadow shadow-black/40">
                <figure className="w-full relative overflow-hidden">
                    <img
                        src={Image_URL + "assets/images/" + data.main_image}
                        alt=""
                        className="w-full h-48"
                    />

                </figure>
                <div className="w-full px-4">
                    <div className="w-full py-2">
                        <h4 className='text-lg font-bold text-black'>
                            {data?.package_title ?? 'Package Title Not Available'}
                        </h4>
                        <div className="w-full mb-2">
                            <span>
                                <EnvironmentOutlined />
                            </span>
                            <span>{data?.state?.state} , {data?.state?.country?.country}</span>
                        </div>
                        <p className='text-gray-700 text-xs tracking-widest hidden'>
                            Here we will write short descrition to each package which will be added from backend admin panel
                        </p>
                    </div>

                    <div className="w-full border-t border-gray-500">
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="col-span-1">
                                <div className="flex text-sm">
                                    <CalendarOutlined />
                                    <span>
                                    {data?.days + ' days ' + data?.nights + ' Nights'}
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
                        {/* <Button variant='gradient' fullWidth color='teal'>Book Now</Button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageLayoutFour

PackageLayoutFour.propTypes = {
    data : PropTypes.object
}