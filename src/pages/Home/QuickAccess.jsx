import PropTypes from "prop-types"

// import React from 'react'

const QuickAccess = ({ image, icon, title }) => {
    return (
        <>
            <div className="w-full  quick_access">
                <img src={image} alt="" className="absolute top-0 z-10 start-0 w-full h-full object-cover" />
                <div className="w-full flex items-center h-full relative z-20 ">
                    <div className="w-full parentqa group transition-all ">
                        <div className="w-full hidden mb-4  *:transition-all">
                            <img src={icon} alt="" className="mx-auto invert-[100] group-hover:scale-[0.7]  transition-all  lg:size-28 size-12" />
                        </div>
                        <div className="w-full  *:transition-all *:mb-4 mb-4 text-center text-white">
                            <h2 className="cursive  lg:text-xl text-sm font-bold">{title}</h2>
                            <p className="lg:text-md text-md">100+ Packages</p>
                        </div>
                        <div className="w-full *:transition-all flex justify-center">
                            <button className="border viewquick border-white px-2 w-40 lg:py-3 py-1 text-white">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-primary/40 absolute bottom-0  end-0 z-20 lg:rounded-t-[3rem] rounded-t-[1rem] overlaybg w-full lg:h-[250px] h-[150px]">

                </div>
            </div>
        </>
    )
}

export default QuickAccess


QuickAccess.propTypes = {
    image : PropTypes.string,
    icon : PropTypes.string,
    title : PropTypes.string
}