import React, { useEffect } from 'react'
// import { classes } from '../../Utils'
import PropTypes from 'prop-types';
import { classes } from '../../../../utils';
import ErrorSpan from '../../../../components/ErrorSpan';
// import ErrorSpan from '../../layout/ErrorSpan';

const GstDetails = ({ errors, setGstDetails }) => {
    const [fdata, setFdata] = React.useState({});
    const handleFdata = (e) => {
        setFdata({ ...fdata, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        setGstDetails(fdata);
    }, [fdata]);

    return (
        <>
            <div className="w-full">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label className='lg:text-sm text-xs font-light uppercase' htmlFor="gstNumber">GST Number</label>
                        <input type="text" onChange={handleFdata} name="gstNumber" id="gstNumber" className={classes} />
                        <ErrorSpan errors={errors} path='gstNumber' />
                    </div>
                    <div className="col-span-1">
                        <label className='lg:text-sm text-xs font-light uppercase' htmlFor="registeredName">Company Name</label>
                        <input type="text" onChange={handleFdata} name="registeredName" id="registeredName" className={classes} />
                        <ErrorSpan errors={errors} path='registeredName' />
                    </div>
                    <div className="col-span-1">
                        <label className='lg:text-sm text-xs font-light uppercase' htmlFor="email">Company Email</label>
                        <input type="email" onChange={handleFdata} name="email" id="email" className={classes} />
                        <ErrorSpan errors={errors} path='email' />
                    </div>
                    <div className="col-span-1">
                        <label className='lg:text-sm text-xs font-light uppercase' htmlFor="mobile">Company Mobile</label>
                        <input type="tel" onChange={handleFdata} name="mobile" id="mobile" className={classes} />
                        <ErrorSpan errors={errors} path='mobile' />
                    </div>
                    <div className="col-span-1">
                        <label className='lg:text-sm text-xs font-light uppercase' htmlFor="address">Enter Address</label>
                        <input type="text" onChange={handleFdata} name="address" id="address" className={classes} />
                        <ErrorSpan errors={errors} path='address' />
                    </div>
                </div>
            </div>
        </>
    )
}
GstDetails.propTypes = {
    setGstDetails: PropTypes.func,
    errors: PropTypes.array
}

export default GstDetails