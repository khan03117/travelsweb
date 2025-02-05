// import React from 'react'
import PropTypes from 'prop-types';
import vimg from '../../../assets/visionbg.webp';
import { FiTarget } from 'react-icons/fi';

const Vision = ({ title, desc }) => {
    return (
        <>
            <div className="w-full h-full hover:bg-primary relative p-10 overflow-hidden rounded bg-black/10">
                <img src={vimg} alt="" className="absolute z-10 top-0 start-0 w-full h-full" />
                <div className="w-full relative z-[50]">
                    <h4 className='section_title flex items-center gap-5 text-primary'>
                        {title} <FiTarget/>
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

Vision.propTypes = {
    title : PropTypes.string,
    desc : PropTypes.string
}