import PropTypes from 'prop-types'
// import React from 'react'

const PackageShortInfoWithIcon = ({ icon, title, value }) => {
    return (
        <>
            <div className="flex w-full gap-2">
                <span className='text-primary text-3xl'>
                    {icon}
                </span>
                <div className="w-full">
                    <h4 className='text-black font-semibold tracking-wider text-md'>{title}</h4>
                    <p className='text-gray-600 text-xs'>
                        {value}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PackageShortInfoWithIcon
PackageShortInfoWithIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}