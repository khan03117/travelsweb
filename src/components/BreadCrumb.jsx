// import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { RiArrowRightDoubleFill } from 'react-icons/ri'

const BreadCrumb = ({ path = [], title }) => {
    return (
        <>
            <section className='bg-primary py-3'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-6">
                            <div className="w-full breadCrumbpath">
                                <div className="flex gap-2">
                                    {
                                        path.map((itm, index, arr) => (
                                            <>
                                                <span className="text-white  inline-flex items-center gap-2 relative ">{<GoDotFill/>} {itm} {arr.length != index + 1 && (<RiArrowRightDoubleFill />)}</span>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="w-full text-end">
                                <h1 className="text-lg font-bold text-white">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb