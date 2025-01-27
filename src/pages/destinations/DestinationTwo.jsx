// import React from 'react'
import QuickAccess from '../Home/QuickAccess'
import one from '../../assets/packages/1.jpeg';
import hall from '../../assets/hall.png'
import two from '../../assets/packages/2.jpeg';
import couple from '../../assets/couple.png';
import icon3 from '../../assets/cake.png';
import icon4 from '../../assets/gate.png'
import three from '../../assets/packages/3.jpeg';
import four from '../../assets/packages/4.jpeg';

const DestinationTwo = () => {
    return (
        <>
            <section className="pb-[3rem]">
                <div className="container">
                    <div className="w-full mb-10 text-center">
                        <h2 className="section_title">
                            Travel Destinations Available Worldwide
                        </h2>
                        <p>
                            We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-6">

                        <div className="lg:col-span-3 col-span-6">
                            <QuickAccess image={one} icon={hall} title={'Dubai'} />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <QuickAccess image={two} icon={couple} title={'Spain'} />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <QuickAccess image={three} icon={icon3} title={'France'} />
                        </div>
                        <div className="lg:col-span-3 col-span-6">
                            <QuickAccess image={four} icon={icon4} title={'Qatar'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DestinationTwo