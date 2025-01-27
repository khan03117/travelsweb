import { CalendarOutlined, EnvironmentOutlined, UsergroupAddOutlined } from '@ant-design/icons'
// import { Button } from '@material-tailwind/react'
// import React from 'react'
import imageone from '../../../assets/packages/9.jpeg'

const PackageLayoutThree = () => {
    return (
        <>
            <div className="w-full rounded-lg p-4 bg-white shadow shadow-primary/40">
                <div className="grid grid-cols-12  h-full gap-3 relative" >
                    <div className="col-span-12 h-full">
                        <figure className='rounded-xl overflow-hidden w-full h-full'>
                            <img src={imageone} alt="" className="w-full h-full min-h-[450px]" />
                        </figure>
                    </div>
                    <div className=" bg-primary/70 *:text-white backdrop-blur-sm p-4 absolute bottom-0 w-full start-[50%]  translate-x-[-50%] z-40">
                        <div className="w-full">
                            <h4 className='text-lg font-bold text-white'>
                                Rainbow Mountain Valley
                            </h4>
                            <div className="w-full mb-2">
                                <span>
                                    <EnvironmentOutlined />
                                </span>
                                <span>Barcelona, Spain</span>
                            </div>
                            <p className='text-white text-xs tracking-widest'>
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
        </>
    )
}

export default PackageLayoutThree