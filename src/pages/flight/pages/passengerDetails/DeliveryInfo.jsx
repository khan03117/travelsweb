import React from 'react'
// import { classes } from '../../Utils';
import PropTypes from 'prop-types';
import { classes } from '../../../../utils';
import ErrorSpan from '../../../../components/ErrorSpan';
// import ErrorSpan from '../../layout/ErrorSpan';

const DeliveryInfo = ({errors, setDeliveryInfo}) => {
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [dinfo, setDinfo] = React.useState({ emails: [], contacts: [] });
    const handleFdata = (e) => {
        const { value, name } = e.target;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'phone') {
            setPhone(value);
        }

    }
    React.useEffect(() => {
        const obj = {
            emails: [email],
            contacts: [phone]
        }
        setDinfo(obj);
    }, [email, phone]);
    React.useEffect(() => {
        setDeliveryInfo(dinfo);
    }, [dinfo]);
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-4 gap-4">
                    <div className="lg:col-span-1 col-span-2">
                        <label htmlFor="" className='lg:text-sm text-xs'>Enter Email</label>
                        <input type="email" name="email" id="email" onChange={handleFdata} className={classes} />
                        <ErrorSpan errors={errors} path='email' />
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                        <label htmlFor="" className='lg:text-sm text-xs' >Enter Mobile</label>
                        <input type="tel" name="phone" id="phone" onChange={handleFdata} className={classes} />
                        <ErrorSpan errors={errors} path='phone' />
                    </div>
                </div>
            </div>
        </>
    )
}
DeliveryInfo.propTypes = {
    setDeliveryInfo: PropTypes.func,
    errors : PropTypes.array
}
export default DeliveryInfo