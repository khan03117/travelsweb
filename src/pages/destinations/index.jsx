// import React from 'react'
import DestinationLayoutOne from './DestinationLayoutOne'

const Destinations = () => {
    return (
        <>
            <section className=' py-10'>
                <div className="container">
                    <div className="w-full mb-20 text-center">
                        <h2 className="section_title mb-3">Top Destinations</h2>
                        <p>
                        Explore our top destinations voted by more than 100,000+ customers around the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        {
                            [...Array(4)].map(() => (
                                <>
                                    <div className="col-span-3">
                                        <DestinationLayoutOne />
                                    </div>

                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations