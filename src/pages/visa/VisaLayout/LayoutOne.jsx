import PropTypes from 'prop-types'
import { RiArrowRightDoubleFill } from 'react-icons/ri'
// import React from 'react'

const LayoutOne = ({ title, description }) => {
    return (
        <>
            <div className="w-full relative p-8 h-full  border-e border-b border-blue-gray-200 bg-white  hover:bg-primary hover:text-white">
               <div className="w-full pb-8">

              
                <h4 className="text-xl mb-5 font-bold">{title}</h4>
                <p className='font-light text-md'>
                    {description}
                </p>
                </div>
                <div className="w-full absolute bottom-3 start-8">
                    <button className='flex gap-2  py-2  font-bold text-sm items-center'>Apply Now <RiArrowRightDoubleFill/> </button>
                </div>
            </div>
        </>
    )
}

export default LayoutOne

LayoutOne.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string
}