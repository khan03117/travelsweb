// import React from 'react'
import pkg1 from '../../assets/packages/tours-12.jpg'
import PropTypes from 'prop-types'
import { StarFilled } from '@ant-design/icons'
const DestinationLayoutTwo = ({ data }) => {
    return (
        <>
            <div className="w-full relative rounded-lg overflow-hidden">
                <figure className="w-full h-[350px]">
                    <img src={pkg1} alt="" className="w-full h-full object-cover" />
                </figure>
                <div className="w-full  p-3 absolute bottom-0 start-0">
                    <div className="w-full bg-white p-2">
                        <h5 className="text-lg font-bold text-center">{data.country}</h5>
                        <div className='flex  text-sm  items-center justify-center'>
                            <span className='text-yellow-600'>
                                <StarFilled />
                            </span>
                            <span className='text-yellow-600'>
                                <StarFilled />
                            </span>
                            <span className='text-yellow-600'>
                                <StarFilled />
                            </span>
                           <span className='text-yellow-600'>
                                <StarFilled />
                            </span>
                           <span className='text-yellow-600 me-2'>
                                <StarFilled />
                            </span>
                            <span>
                                400 Reviews
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationLayoutTwo

DestinationLayoutTwo.propTypes = {
    data: PropTypes.object
}