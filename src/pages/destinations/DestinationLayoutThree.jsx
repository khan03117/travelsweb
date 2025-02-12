// import React from 'react'
import { StarFilled } from "@ant-design/icons"
import { Image_URL } from "../../utils"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const DestinationLayoutThree = ({ data }) => {
    return (
        <>
            <Link to={'/packages/' + data.url} className="w-full block group relative  *:transition-all *:duration-1000 transition-all duration-1000">
                <figure className="w-full relative z-10 rounded-[2rem] overflow-hidden">
                    <div className="absolute block group-hover:hidden top-0 z-40 end-0 bg-black/20 h-full w-full"></div>
                    <div className="absolute z-[99] top-10 start-0 inline-flex flex-col gap-1">
                        <span className="inline-block bg-blue-700 text-white   px-2 py-1 text-xs  rounded-e-full">Featured</span>
                        <span className="inline-block text-white  bg-red-500  px-2 py-1 text-xs  rounded-e-full">Offered</span>
                    </div>
                    <img src={Image_URL + "assets/images/" + data.image} alt="" className="w-full h-[300px] object-cover rounded-[2rem]" />
                </figure>
                <div className="destinationText relative z-50 -top-6  bg-white/90 backdrop-blur-sm w-[98%] mx-auto p-4 rounded-[2rem] shadow-lg shadow-black/40">
                    <div className="pb-1 grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex gap-1">
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
                                {data.package_count} Packages
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <h4 className="text-xl font-semibold capitalize">{data.country.toLowerCase()}</h4>
                        <div className="text-sm text-gray-700  transition-all duration-1000">
                           
                            <div dangerouslySetInnerHTML={{ __html: data.about?.substr(0,100) }} />...
                        </div>
                    </div>
                    <div className="pb-3   *:transition-all *:duration-1000">
                        <button className="w-full rounded-full text-white bg-primary px-4 py-3 text-sm">
                            View Packages

                        </button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DestinationLayoutThree

DestinationLayoutThree.propTypes = {
    data: PropTypes.object
}