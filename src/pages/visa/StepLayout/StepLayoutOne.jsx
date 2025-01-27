import PropTypes from "prop-types"

// import React from 'react'

const StepLayoutOne = ({ image, index, title, desc }) => {
    return (
        <>
            <div className="w-full text-center">
                <div className="size-[200px] overflow-hidden rounded-full mx-auto p-3  border-2 border-primary relative">
                    <img src={image} alt="" className="size-full rounded-full " />
                    <span className="bg-black/10 w-full stroke_text h-full  flex justify-center items-center absolute top-0 start-0">
                        {index}
                    </span>
                </div>
                <div className="w-full my-4">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <p className="text-sm font-light leading-8">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default StepLayoutOne
StepLayoutOne.propTypes = {
    image: PropTypes.string,
    index: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}