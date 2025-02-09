import PropTypes from "prop-types"

// import React from 'react'

export const FlexWithIcon = ({ icon, title, count }) => {
    return (
        <>
            <div className="flex gap-2">
                <div className="size-10  text-3xl text-primary  flex justify-center items-center ">
                    {icon}
                </div>
                <div className="w-[calc(100%-1rem)]">
                    <h3 className="text-xl text-primary  font-semibold">{title}</h3>
                    <p className="text-md text-gray-600">{count}</p>
                </div>
            </div>
        </>
    )
}

FlexWithIcon.propTypes = {
    icon : PropTypes.node,
    title : PropTypes.string,
    count : PropTypes.number
}
