// import React from 'react'
// import pkg1 from '../../assets/packages/tours-12.jpg'
import PropTypes from 'prop-types'
import { RightOutlined, StarFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Image_URL } from '../../utils'
const DestinationLayoutTwo = ({ data }) => {
    return (
        <>
            <div className="w-full group border border-white hover:border-primary relative rounded-lg overflow-hidden">
                <Link to={'/packages/' + data.url} className='size-10 bg-white z-50 rounded-full shadow-md shadow-white/50 absolute top-3 end-3 flex items-center justify-center'>
                    <RightOutlined/>
                </Link>
                <figure className="w-full destinationbgoverlay relative lg:h-[350px] h-[250px]">
                    <img src={Image_URL + "assets/images/" + data.image} alt="" className="w-full h-full object-cover" />
                </figure>
                <div className="w-full  lg:p-3 p-1 absolute z-50 bottom-0 start-0">
                    <div className="w-full bg-white lg:p-2 px-0 py-1 rounded-md">
                        <h5 className="lg:text-lg text-xs  font-semibold text-center capitalize">{data.country.toLowerCase()}</h5>
                        <div className='flex *:lg:text-sm *:text-xs  items-center justify-center'>
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
                                {data.package_count > 10 ? '10+' : data.package_count } Packages
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