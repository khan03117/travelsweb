// import React from 'react'
import { Link } from 'react-router-dom'
// import adv1 from '../../assets/packages/tours-13.jpg'
import offer1 from '../../assets/offer/offer1.jpg'
import offer2 from '../../assets/offer/offer2.jpg'
const CtaLayoutTwo = () => {
    return (
        <>
            <section className='py-[5rem]'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-6 col-span-12">
                            <div className="w-full relative overflow-hidden rounded-lg">
                                <img src={offer1} alt="" className="w-full relative top-0  z-10 start-0 h-80" />
                                <div className="w-full absolute p-8 z-20 *:text-white top-0 start-0 h-full">
                                    <h2 className=" font-bold mb-5 lg:text-[2rem] text-xl">Discover Special Deals!</h2>
                                    <p>Make sure to check out these special
                                        promotions</p>
                                    <div className="w-full mt-10">
                                        <Link to={'/'} className='px-10 uppercase py-3 bg-primary text-white rounded-lg'>Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <div className="w-full relative overflow-hidden rounded-lg">
                                <img src={offer2} alt="" className="w-full relative top-0  z-10 start-0 h-80" />
                                <div className="w-full absolute p-8 z-20 *:text-white top-0 start-0 h-full">
                                    <h2 className=" font-bold mb-5  lg:text-[2rem] text-xl">Discover Special Deals!</h2>
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