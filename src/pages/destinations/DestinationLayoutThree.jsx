// import React from 'react'
import { StarFilled } from "@ant-design/icons"
import { Image_URL } from "../../utils"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const DestinationLayoutThree = ({ data }) => {
    return (
        <>
            <Link to={'/packages/' + data.url} className="w-full h-full block group relative  *:transition-all *:duration-1000 transition-all duration-1000">
                <figure className="w-full relative z-10 lg:rounded-[2rem] rounded overflow-hidden">
                    <div className="absolute block group-hover:hidden top-0 z-40 end-0 bg-black/20 h-full w-full"></div>
                    <div className="absolute z-[99] top-10 start-0 inline-flex flex-col gap-1">
                        <span className="inline-block bg-blue-700 text-white   px-2 py-1 text-xs  rounded-e-full">Featured</span>
                        <span className="inline-block text-white  bg-red-500  px-2 py-1 text-xs  rounded-e-full">Offered</span>
                    </div>
                    <img src={Image_URL + "assets/images/" + data.image} alt="" className="w-full lg:h-[300px] h-[200px] object-cover rounded-none lg:rounded-[2rem]" />
                </figure>
                <div className="destinationText relative z-50 lg:-mt-6 -mt-10  bg-white/90 backdrop-blur-sm w-[98%] mx-auto lg:p-4 p-2 lg:rounded-[2rem] rounded shadow-lg shadow-black/40">
                    <div className="pb-1 grid grid-cols-2">
                        <div className="lg:col-span-1 col-span-2">
                            <div className="flex  gap-1">
                                <span className="lg:text-sm text-xs text-orange-400">
                                    <StarFilled />
                                </span>
                                <span className="lg:text-sm text-xs text-orange-400">
                                    <StarFilled />
                                </span>
                                <span className="lg:text-sm text-xs text-orange-400">
                                    <StarFilled />
                                </span>
                                <span className="lg:text-sm text-xs text-orange-400">
                                    <StarFilled />
                                </span>
                                <span className="lg:text-sm text-xs text-orange-400">
                                    <StarFilled />
                                </span>

                                <span className="text-xs">
                                    (4)
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-1 col-span-2">
                            <div className="lg:text-end lg:text-sm text-xs text-gray-700">
                                {data.package_count} Packages
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-3 py-1">
                        <h4 className="lg:text-xl text-xs lg:font-semibold capitalize">{data.country.toLowerCase()}</h4>
                        <div className="text-sm lg:block hidden text-gray-700  transition-all duration-1000">
                           
                            <div dangerouslySetInnerHTML={{ __html: data.about?.substr(0,100) }} />...
                        </div>
                    </div>
                    <div className="pb-3   *:transition-all *:duration-1000">
                        <button className="w-full  rounded-full text-white bg-primary lg:px-4 px-2 lg:py-3 py-1 lg:text-sm text-xs">
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