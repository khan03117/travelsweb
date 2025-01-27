import React from 'react'

const WhyUsBox = ({ icon, title, desc }) => {
    return (
        <>
            <div className="w-full text-center shadow-sm shadow-primary/40 h-full bg-white rounded-lg border border-primary/20 p-5">
                <div className="icon size-20 mx-auto">
                    <img src={icon} className='w-full' alt="icon1" />
                </div>
                <h4 className="text-primary text-lg font-bold cursive py-3">{title}</h4>
                <p className="font-light text-sm tracking-wider">
                    {desc}
                </p>
            </div>
        </>
    )
}

export default WhyUsBox