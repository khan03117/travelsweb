// import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import banner1 from '../../../assets/banners/banner1.jpeg'
import banner2 from '../../../assets/banners/banner2.jpeg'
import { FlexWithIcon } from './elements/FlexWithIcon'
import { ImTicket } from 'react-icons/im'
import { Button } from '@material-tailwind/react'
const SingleScreenBanner = () => {
    return (
        <>
            <section className="relative pt-8  z-30">
                <div className="bg-overlay"></div>
                <div className="container relative z-40">
                    <div className="grid grid-cols-12 items-center gap-5">
                        <div className="lg:col-span-5 col-span-12">
                            <div className="w-full">
                                <h2 className='lg:text-[4rem] text-[2.9rem] font-bold'>
                                    <span className="relative inline-block before:absolute before:bottom-4 -z-[1] before:start-0 before:border-b-4 before:border-yellow-700 before:w-full before:h-[1px]">
                                        Adventure
                                    </span>   <br />& Experience The Travel !
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-12">
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="col-span-1">
                                        <div className="w-full h-full">
                                            <img src={banner1} alt="" className="w-full  rounded-full h-[550px] object-cover" />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="w-full h-full mt-16">
                                            <img src={banner2} alt="" className="w-full h-[550px] rounded-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 lg:block hidden relative -top-28">
                            <div className="w-full rounded-full p-4 bg-white shadow-md shadow-black/40">
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-4">
                                       
                                        <FlexWithIcon
                                            icon={ <MdLocationOn />}
                                            title={'Destinations'}
                                            count={'100+'}
                                        />
                                    </div>
                                    <div className="col-span-4">
                                       
                                        <FlexWithIcon
                                            icon={ <ImTicket />}
                                            title={'Packages'}
                                            count={'500+'}
                                        />
                                    </div>
                                    <div className="col-span-4 text-end">
                                       <Button variant='gradient' className='rounded-full px-16 py-4 ' color='teal' >Explore</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleScreenBanner