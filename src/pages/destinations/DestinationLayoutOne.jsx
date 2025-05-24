// import React from 'react'
import PropTypes from 'prop-types'
// import pkg1 from '../../assets/packages/1.jpeg'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../utils'

const DestinationLayoutOne = ({ data }) => {
  return (
    <>
      <Link to={'/packages/' + data.url} className="w-full group *:transition-all *:duration-1000  group-hover:animate-bounce block relative ">
        <figure className="lg:size-[250px] size-[150px] rounded-full overflow-hidden border group-hover:border-black  border-primary p-3 relative">
          <div className="relative overflow-hidden  destinationbgoverlay w-full h-full rounded-full">
            <img src={WEB_Image_URL + "assets/images/" + data.image} alt="" className="w-full group-hover:animate-pulse object-cover relative  h-full rounded-full" />
          </div>
          <span className="font-bold lg:text-2xl text-sm text-white  transition-all duration-1000  group-hover:text-black  bg-white/30 absolute text-center top-0 left-0 w-full h-full  z-50 flex items-center justify-center ">{data.country}</span>
        </figure>
      </Link>
    </>
  )
}

export default DestinationLayoutOne

DestinationLayoutOne.propTypes = {
  data: PropTypes.object
}