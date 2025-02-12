import { CalendarOutlined, EnvironmentOutlined, UsergroupAddOutlined } from '@ant-design/icons'
// import { Button } from '@material-tailwind/react'
// import React from 'react'
import imageone from '../../../assets/packages/9.jpeg'
import { Image_URL } from '../../../utils'
import PropTypes from 'prop-types'
// import { Button } from '@material-tailwind/react'

const PackageLayoutThree = ({data}) => {
    return (
        <>
            <div className="w-full rounded-lg group overflow-hidden bg-white shadow shadow-primary/40">
                <div className="grid grid-cols-12  h-full gap-3 relative" >
                    <div className="col-span-12 h-full">
                        <figure className='rounded-xl overflow-hidden w-full h-full'>
                            <img src={data.main_image ? Image_URL + "assets/images/"+data.main_image : imageone} alt="" className="w-full h-full min-h-[450px]" />
                        </figure>
                    </div>
                    <div className="bg-black/30 themetransition transition-all translate-y-14 group-hover:-translate-y-0  *:text-white backdrop-blur-sm p-4 absolute bottom-0 w-full start-[50%]  translate-x-[-50%] z-40" >
                        <div className="w-full">
                            <h4 className='text-lg font-bold text-white'>
                                {data.package_title}
                            </h4>
                            <div className="w-full mb-2">
                                <span>
                                    <EnvironmentOutlined />
                                </span>
                                <span  className='capitalize'>{data.state?.state}, {data.state?.country?.country?.toLowerCase()}</span>
                            </div>
                            <p className='text-white hidden text-xs tracking-widest'>
                                Here we will write short descrition to each package which will be added from backend admin panel
                            </p>
                        </div>
                        <div className="w-full border-t border-gray-500">
                            <div className="grid grid-cols-2 gap-2 py-3">
                                <div className="col-span-1">
                                    <div className="flex text-sm gap-2 items-center">
                                        <span className="text-xl">
                                        <CalendarOutlined />
                                        </span>
                                      
                                        <span>
                                            {data.days} Day, {data.nights} Nights
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-1 text-end">
                                    <div className="inline-flex text-sm gap-2 items-center">
                                        <span className="text-xl">
                                        <UsergroupAddOutlined />
                                        </span>
                                       
                                        <span>
                                            2 Guests
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full themetransition">
                            <button className='w-full p-2 bg-primary themetransition rounded'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageLayoutThree

PackageLayoutThree.propTypes = {
    data : PropTypes.object
}