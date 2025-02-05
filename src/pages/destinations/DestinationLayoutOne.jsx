// import React from 'react'
import PropTypes from 'prop-types'
import pkg1 from '../../assets/packages/1.jpeg'
import { Link } from 'react-router-dom'

const DestinationLayoutOne = ({ data }) => {
  return (
    <>
      <Link to={'/packages/' + data.url} className="w-full block relative ">
        <figure className="size-[250px] rounded-full overflow-hidden border border-primary p-3 relative">
          <img src={pkg1} alt="" className="w-full h-full rounded-full" />
          <span className="font-bold text-3xl text-black bg-white/30 absolute text-center top-0 left-0 w-full h-full flex items-center justify-center ">{data.country}</span>
        </figure>
      </Link>
    </>
  )
}

export default DestinationLayoutOne

DestinationLayoutOne.propTypes = {
  data: PropTypes.object
}