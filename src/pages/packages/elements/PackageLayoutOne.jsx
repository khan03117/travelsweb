import { CalendarOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import PackageShortInfoWithIcon from './Minielements/PackageShortInfoWithIcon'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import React from 'react'

const PackageLayoutOne = ({data}) => {
    return (
        <>
            <div className="w-full p-4 bg-white shadow shadow-black/40 rounded">
                <figure className="w-full  relative overflow-hidden">
                    <img src="https://dreamstour.dreamstechnologies.com/html/assets/img/tours/tours-07.jpg" alt="" className="w-full" />
                </figure>
                <div className="w-full bg-white pt-2">
                    <h4 className="text-black  mb-2 font-bold text-lg">
                       {data?.package_title ?? 'Package Title Not Available'}
                    </h4>
                    <p className='text-gray-700 text-xs tracking-widest'>
                        Here we will write short descrition to each package which will be added from backend admin panel
                    </p>
                    <div className="border-t py-2 mt-2 border-gray-400">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                <PackageShortInfoWithIcon icon={<CalendarOutlined />} title={'Duration'} value={data?.days +' days '+data?.nights+' Nights'} />
                            </div>
                            <div className="col-span-1 ">
                                <PackageShortInfoWithIcon icon={<UsergroupAddOutlined />} title={'Users'} value={data?.min_travellers ?? '2'} />

                            </div>
                        </div>

                    </div>
                    <div className="w-full flex items-center justify-between">
                        <Link to={'/package/show/'+data?.url} className="px-4 py-2 bg-primary text-white text-xs rounded">View Detail</Link>
                        <button className="px-4 py-2  active:bg-black text-primary border border-primary hover:bg-primary hover:text-white text-xs rounded">Book Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PackageLayoutOne

PackageLayoutOne.propTypes = {
    data : PropTypes.object
}