// import React from 'react'
import vimg from '../../../assets/visionbg.webp';
const Vision = ({ title, desc }) => {
    return (
        <>
            <div className="w-full h-full hover:bg-primary relative p-10 overflow-hidden rounded bg-black/10">
                <img src={vimg} alt="" className="absolute z-10 top-0 start-0 w-full h-full" />
                <div className="w-full relative z-[50]">
                    <h4 className='section_title text-primary'>
                        {title}
                    </h4>
                    <p className='text-lg leading-9 font-light'>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Vision