// import React from 'react'
import { FaCentercode } from 'react-icons/fa'

const WorkSection = () => {
    return (
        <>
            <section className="work-section relative py-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <h2 className='text-3xl font-bold cursive '>Here’s a breakdown of how our services work<span className="text-primary">.</span></h2>
                        </div>
                        {
                            [1, 2, 3].map(it => (
                                <>

                                    <div className="col-span-3">
                                        <div className="bg-white/50 rounded-lg overflow-hidden mb-4 shadow-md shadow-primary/40 ">
                                            <div className="relative  ">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="work-icon text-[3rem] text-teal-600 flex">
                                                            <FaCentercode />
                                                        </span>
                                                        <span className="work-avatar cursive font-bold" >
                                                            0{it}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-3 font-semibold  text-lg">Checking Availability</h5>
                                                        <p className="text-md  text-gray-800">Ensure that the tour is available on the dates you plan to travel.
                                                            Browse available tours in your destination.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default WorkSection