// import React from 'react'
import icon1 from '../../assets/icon/p1.png'
import icon2 from '../../assets/icon/p2.png'
import icon3 from '../../assets/icon/p3.png'
import icon4 from '../../assets/icon/p4.png'
import WhyUsBox from './WhyUsBox';
const WhyUs = () => {
    return (
        <>
            <section className="py-20 whyUs bg-primary relative">
                <div className="container pt-10 ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 text-center text-white">
                            <h2 className="section_title">Why choose us</h2>
                            <p>
                                Most Trusted and premium Matrimony Service in the World.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-20 bg-primary/10 relative -mt-14'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6">

                        <div className="lg:col-span-3 col-span-6">
                            <WhyUsBox
                                icon={icon1}
                                title={'Curated Experiences'}
                                desc={'Handpicked travel packages designed to create unforgettable memories.'}
                            />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <WhyUsBox
                                icon={icon2}
                                title={'Best Price Guarantee'}
                                desc={'Competitive pricing with no hidden costs – enjoy more for less.'}
                            />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <WhyUsBox
                                icon={icon3}
                                title={'Trusted by Travelers'}
                                desc={'Thousands of happy customers trust us for their adventures worldwide.'}
                            />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <WhyUsBox
                                icon={icon4}
                                title={'Flexible Customization'}
                                desc={'Tailor your trip to fit your preferences, budget, and schedule.'}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs