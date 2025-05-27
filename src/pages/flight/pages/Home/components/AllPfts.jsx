// import React from 'react'
import PropTypes from 'prop-types'
import { pfts } from '../../../../../utils'

const AllPfts = ({checkinquota, quota}) => {
    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <div className="w-full flex flex-wrap gap-4 mt-5">
                        {
                            pfts.map((itm) => (
                                <>
                                    <div onClick={() => checkinquota(itm.key)} className={`inline-flex gap-1 cursor-pointer ${quota == itm.key ? "active" : ""} quotabox`}>
                                        <div className={`size-4 rounded-full border checkbox relative ${quota == itm.key ? "bg-white" : ""} quotabox`}> </div>
                                        <span className="text-sm text-white">{itm.title}</span>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllPfts

AllPfts.propTypes = {
    checkinquota : PropTypes.func,
    quota : PropTypes.string
}