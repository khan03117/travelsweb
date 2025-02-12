// import React from 'react'
import PropTypes from 'prop-types';
import load1 from '../assets/loader/plane.gif';
// import load2 from '../assets/loader/2.png';
// import load3 from '../assets/loader/3.png';

const Loading = ({ height = null }) => {
    return (
        <>
            <section className={`absolute bg-white/60 backdrop-blur-sm w-full ${height}    top-0 end-0 z-50`}>
                <div className="container h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={load1} className='max-w-1/2 mx-auto' alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loading

Loading.propTypes = {
    height : PropTypes.string
}