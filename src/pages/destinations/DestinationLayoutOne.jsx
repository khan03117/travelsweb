// import React from 'react'
import pkg1 from '../../assets/packages/1.jpeg'
const DestinationLayoutOne = () => {
  return (
    <>
        <div className="w-full relative ">
            <figure className="size-[250px] rounded-full overflow-hidden border border-primary p-3 relative">
                <img src={pkg1} alt="" className="w-full h-full rounded-full" />
                <span className="font-bold text-3xl text-black bg-white/30 absolute top-0 left-0 w-full h-full flex items-center justify-center ">Spain</span>
            </figure>
        </div>
    </>
  )
}

export default DestinationLayoutOne