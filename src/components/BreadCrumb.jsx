// import React from 'react'
import PropTypes from 'prop-types'
import { GoDotFill } from 'react-icons/go'
import { RiArrowRightDoubleFill } from 'react-icons/ri'

const BreadCrumb = ({ path = [], title }) => {
    return (
        <>
            <section className='bg-primary py-3'>
                <div className="container">
                    <div className="grid grid-cols-12  items-center lg:gap-5 gap-4">
                        <div className="col-span-6">
                            <div className="w-full breadCrumbpath">
                                <div className="flex gap-1">
                                    {
                                        path.map((itm, index, arr) => (
                                            <>
                                                <span className="text-white  inline-flex items-center gap-2 relative text-sm sm:text-xs ">{<GoDotFill/>} {itm} {arr.length != index + 1 && (<RiArrowRightDoubleFill />)}</span>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <div className="w-full lg:text-end">
                                <h1 className="lg:text-lg capitalize  text-xs font-bold text-white">{title.toLowerCase()}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb

BreadCrumb.propTypes={
    path : PropTypes.array,
    title : PropTypes.string
}