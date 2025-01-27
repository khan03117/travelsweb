// import React from 'react'
import { Link } from 'react-router-dom'
import adv1 from '../../assets/packages/tours-13.jpg'

const CtaLayoutTwo = () => {
    return (
        <>
            <section className='py-[5rem]'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-6">
                            <div className="w-full relative overflow-hidden rounded-lg">
                                <img src={adv1} alt="" className="w-full relative top-0  z-10 start-0 h-80" />
                                <div className="w-full p-5 absolute z-20 bg-white/40 top-0 start-0 h-full">
                                    <h2 className="cursive font-bold mb-5 text-[2rem]">Discover Special Deals!</h2>
                                    <p>Make sure to check out these special
                                        promotions</p>

                                    <div className="w-full mt-10">
                                        <Link to={'/'} className='px-10 uppercase py-3 bg-primary text-white rounded-lg'>Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="w-full relative overflow-hidden rounded-lg">
                                <img src={adv1} alt="" className="w-full relative top-0  z-10 start-0 h-80" />
                                <div className="w-full p-5 absolute z-20 bg-white/40 top-0 start-0 h-full">
                                    <h2 className="cursive font-bold mb-5 text-[2rem]">Discover Special Deals!</h2>
                                    <p>Make sure to check out these special
                                        promotions</p>

                                    <div className="w-full mt-10">
                                        <Link to={'/'} className='px-10 uppercase py-3 bg-primary text-white rounded-lg'>Explore</Link>
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

export default CtaLayoutTwo