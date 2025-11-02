import React, { useState } from 'react'
import { WEB_API_URL, WEB_SANCTUM_KEY } from '../../../utils';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QuoteForm = ({ id, service = null }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [fdata, setFdata] = React.useState({});
    const handleFdata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFdata((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const validations = () => {
        let errs = {};
        if (!fdata.name) {
            errs['name'] = "Name is required"
        }
        if (!fdata.email) {
            errs['email'] = "Email is required"
        }
        if (!fdata.mobile) {
            errs['mobile'] = "Mobile is required"
        }
        if (!fdata.expected_date) {
            errs['expected_date'] = "Expected date is required"
        }
        if (Object.entries(errs).length > 0) {
            setErrors(errs);
            return false;

        } else {
            return true;
        }
    }
    const savecontactquery = async (e) => {
        e.preventDefault();
        if (validations()) {


            const data = { ...fdata, ['package_id']: id }
            if (service) {
                data['service'] = service;
            }
            const resp = await axios.post(WEB_API_URL + "contact-query", data, {
                headers: {
                    Authorization: WEB_SANCTUM_KEY
                }
            });
            if (resp.data.success) {
                toast.success('query saved successfully');
                setFdata({});
                navigate('/thank-you')
            }
        }
    }
    return (
        <>
            <div className="w-full p-5 sticky top-0 shadow shadow-primary rounded">
                <h4 className='font-bold text-[1.5rem]  text-primary mb-5 block' >Get Free Quotes</h4>
                <form action="#" method="post" className='*:pb-2'>
                    <div className="form-group">
                        <label className='form-label' htmlFor="">Enter Name</label>
                        <input type="text" name="name" onChange={handleFdata} className="w-full border border-primary focus:border-2 focus-within:border-2 outline-none rounded py-3 text-xs ps-4" id="" />
                        {
                            errors.name && (
                                <p className="text-xs text-red-500">
                                    {errors.name}
                                </p>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor="">Enter Email</label>
                        <input type="text" name="email" onChange={handleFdata} className="w-full border border-primary focus:border-2 focus-within:border-2 outline-none rounded py-3 text-xs ps-4" id="" />
                        {
                            errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email}
                                </p>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor="">Enter Mobile</label>
                        <input type="text" name="mobile" onChange={handleFdata} className="w-full border border-primary focus:border-2 focus-within:border-2 outline-none rounded py-3 text-xs ps-4" id="" />
                        {
                            errors.mobile && (
                                <p className="text-xs text-red-500">
                                    {errors.mobile}
                                </p>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor="">Expected Date</label>
                        <input type="date" name="expected_date" onChange={handleFdata} className="w-full border border-primary focus:border-2 focus-within:border-2 outline-none rounded py-3 text-xs ps-4" id="" />
                        {
                            errors.expected_date && (
                                <p className="text-xs text-red-500">
                                    {errors.expected_date}
                                </p>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor="">Enter Message</label>
                        <textarea name="message" onChange={handleFdata} className='w-full border border-primary focus:border-2 focus-within:border-2 outline-none rounded py-3 text-xs ps-4' id=""></textarea>
                    </div>
                    <div className="form-group">
                        <button onClick={savecontactquery} className='w-full py-2 px-5 bg-primary text-white rounded'>Send Query</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QuoteForm

QuoteForm.propTypes = {
    id: PropTypes.string,
    service: PropTypes.string
}
