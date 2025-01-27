import React from 'react'
import { useUser } from './UserContext'
import { Radio } from '@material-tailwind/react';
import axios from 'axios';
import { API_URL, usertoken } from '../../utils';
import Loading from '../../components/Loading';
import { FaCircle } from 'react-icons/fa6';

const UpdateProfile = () => {
    const { user, loading } = useUser();
    const [fdata, setFdata] = React.useState({});
    const [mdata, setMdata] = React.useState([]);
    const token = localStorage.getItem(usertoken);
    const [years, setYears] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const [status, setStatus] = React.useState(0);
    const getyears = () => {
        const yearsArray = [];

        // Loop through the years from 1975 to the current year
        for (let year = 1975; year <= new Date().getFullYear(); year++) {
            yearsArray.push(year);
        }
        setYears(yearsArray);
    }

    const [isload, setLoad] = React.useState(true);
    const getmdata = async () => {
        try {
            setLoad(true)
            const resp = await axios.get(API_URL + "surajmal/core-values");
            setMdata(resp.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoad(false)
        }
    }
    const [allfields, setAllFields] = React.useState({});
    const getfields = async () => {
        const items = await axios.get(API_URL + "user/all_fields");
        setAllFields(items.data.data);
    }
    React.useEffect(() => {
        getfields();
        getmdata();
        getyears();
    }, []);
    React.useEffect(() => {
        if (allfields && user && !loading) {
            let arr = {}
            // eslint-disable-next-line no-unused-vars
            Object.entries(allfields).map(([k, v]) => {
                if (!['is_deleted', 'is_rejected'].includes(k)) {
                    if (!['city', 'diet', 'occupation', 'state', 'city', 'gautra_avoided'].includes(k)) {
                        arr[k] = user[k]
                    } else if (['city', 'diet', 'occupation', 'state', 'city'].includes(k)) {
                        arr[k] = user[k]?._id
                    } else if (k == "gautra_avoided") {
                        arr[k] = user[k] ? user[k].join(',') : ""
                    }
                }
            });
            user?.education && user?.education.map(edu => {
                arr['completed_year'] = edu.completed_year;
                arr['education'] = edu.education
                return true;
            })
            setFdata(arr);
        }
    }, [allfields, user, loading]);
    const handleFdata = (e) => {
        setFdata((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const updateProfile = async () => {
        try {
            setLoad(true);
            const formd = new FormData();
            Object.entries(fdata).map(([k, v]) => {
                formd.append(k, v);
            });
            
            const itm = await axios.put(API_URL + "user/update", formd, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            setStatus(itm.data.success);
            setMsg(itm.data.message);
            window.scrollTo(0,0);
        } catch (err) {
            console.log(err);
        } finally {
            setLoad(false)
        }
    }
    return (
        <>
            {
                loading || isload ?
                    (
                        <>
                            <section className="h-screen">
                                <Loading height={'h-screen'} />
                            </section>
                        </>
                    ) : (
                        <>

                            <section>
                                <div className="container themeform border border-primary/50 p-5 bg-yellow-200/10 backdrop-blur-sm rounded-lg">
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12">
                                            {
                                                msg && (
                                                    <>
                                                        <div className={`${status == "1" ? 'bg-green-500' : 'bg-red-500'} text-white p-4 text-xs`}>
                                                            {msg}
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className="col-span-12">
                                            <div className="p-2 flex gap-3 items-center text-sm  font-light text-primary bg-primary/20 rounded border-s  border-primary">
                                                <FaCircle />   User Info
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Name</label>
                                                <input type="text" name="name" onChange={handleFdata} value={fdata?.name} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Last Name</label>
                                                <input type="text" name="last_name" onChange={handleFdata} value={fdata?.last_name} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Select Gender</label>
                                                <div className="flex">
                                                    <Radio name='gender' onClick={handleFdata} value={'Male'} checked={fdata?.gender == "Male"} label="Male" />
                                                    <Radio name='gender' onClick={handleFdata} value={'Female'} checked={fdata?.gender == "Female"} label="Female" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Email</label>
                                                <input type="text" name="email" onChange={handleFdata} value={fdata?.email} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Aadhar No</label>

                                                {
                                                    user.adhar_verify ? (
                                                        <>
                                                            <div className="w-full form-control">
                                                                {fdata?.adhar_no}
                                                            </div>
                                                        </>
                                                    ) :
                                                        (
                                                            <>
                                                                <input type="text" name="adhar_no" onChange={handleFdata} value={fdata?.adhar_no} id="" className="form-control" />

                                                            </>
                                                        )
                                                }
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Date of Birth</label>
                                                <input type="date" name="date_of_birth" onChange={handleFdata} value={fdata?.date_of_birth ? fdata?.date_of_birth.split('T')[0] : ""} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <div className="p-2 flex gap-3 items-center text-sm  font-light text-primary bg-primary/20 rounded border-s  border-primary">
                                                <FaCircle />   Social Info
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Father Gautra</label>
                                                <input type="text" name="fathergautra" onChange={handleFdata} value={fdata?.fathergautra} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Mother Gautra</label>
                                                <input type="text" name="mothergautra" onChange={handleFdata} value={fdata?.mothergautra} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Excluded Gautras</label>
                                                <input type="text" name="gautra_avoided" onChange={handleFdata} value={fdata?.gautra_avoided} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Marital Status</label>
                                                {/* <input type="text" name="marital_status" onChange={handleFdata} value={fdata?.marital_status} id="" className="form-control" /> */}

                                                <select onChange={handleFdata} name='marital_status' className="form-control" >
                                                    <option value="">---Select---</option>
                                                    <option selected={"Single" == fdata?.marital_status} value={"Single"}>{"Single"}</option>
                                                    <option selected={"Widow" == fdata?.marital_status} value={"Widow"}>{"Widow"}</option>
                                                    <option selected={"Divorced" == fdata?.marital_status} value={"Divorced"}>{"Divorced"}</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-span-12">
                                            <div className="p-2 flex gap-3 items-center text-sm  font-light text-primary bg-primary/20 rounded border-s  border-primary">
                                                <FaCircle />   Personal Info
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="">Expectations</label>
                                            <textarea name="expectation" rows='5' onChange={handleFdata} value={fdata?.expectation} className="form-control"></textarea>
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="">About Me</label>
                                            <textarea name="about_me" rows='5' onChange={handleFdata} value={fdata?.about_me} className="form-control"></textarea>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Height <small className='text-red-500'>height in(x.y) feet</small> </label>
                                                <input type="text" name="height" onChange={handleFdata} value={fdata?.height} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">eye color</label>
                                                <input type="text" name="eye_color" onChange={handleFdata} value={fdata?.eye_color} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Occupation</label>
                                                <select onChange={handleFdata} name='occupation' className="form-control" >
                                                    <option value="">---Select---</option>
                                                    {
                                                        mdata.filter(obj => obj.column_type == "occupation").map(itm => (
                                                            <>
                                                                <option selected={itm._id == fdata.occupation} value={itm._id}>{itm.title}</option>
                                                            </>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Diet</label>
                                                <select onChange={handleFdata} name='diet' className="form-control" >
                                                    <option value="">---Select---</option>
                                                    {
                                                        mdata.filter(obj => obj.column_type == "diet").map(itm => (
                                                            <>
                                                                <option selected={itm._id == fdata.diet} value={itm._id}>{itm.title}</option>
                                                            </>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Annual Income</label>
                                                <input type="text" onChange={handleFdata} name='annual_income' value={fdata?.annual_income} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <div className="p-2 flex gap-3 items-center text-sm  font-light text-primary bg-primary/20 rounded border-s  border-primary">
                                                <FaCircle />   Educational Info
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <label htmlFor="">Education</label>
                                            <select onChange={handleFdata} name='education' className="form-control" >
                                                <option value="">---Select---</option>
                                                {
                                                        mdata.filter(obj => obj.column_type == "education").map(itm => (
                                                            <>
                                                                <option selected={itm._id == fdata.education} value={itm._id}>{itm.title}</option>
                                                            </>
                                                        ))
                                                    }
                                            </select>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <label htmlFor="">Completed Year</label>
                                            <select name="education_year" onChange={handleFdata} id="" className="form-control">
                                                <option value="">---Select---</option>
                                                {
                                                    years.map(itm => (
                                                        <>
                                                            <option selected={fdata?.completed_year} value={itm}>{itm}</option>
                                                        </>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="col-span-12">
                                            <div className="p-2 flex gap-3 items-center text-sm  font-light text-primary bg-primary/20 rounded border-s  border-primary">
                                                <FaCircle />   Native Address Info
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Select State</label>
                                                <select onChange={handleFdata} name='state' className="form-control" >
                                                    <option value="">---Select---</option>
                                                    {
                                                        mdata.filter(obj => obj.column_type == "state").map(itm => (
                                                            <>
                                                                <option selected={itm._id == fdata.state} value={itm._id}>{itm.title}</option>
                                                            </>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">

                                                <label htmlFor="">Select City</label>

                                                <select onChange={handleFdata} name='city' className="form-control" >
                                                    <option value="">---Select---</option>
                                                    {
                                                        mdata.filter(obj => obj.column_type == "city" && obj.parent_id._id == fdata?.state).map(itm => (
                                                            <>
                                                                <option selected={itm._id == fdata.city} value={itm._id}>{itm.title}</option>
                                                            </>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-3 col-span-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Pincode</label>
                                                <input type="text" onChange={handleFdata} name="pincode" value={fdata?.pincode} id="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 pb-4">
                                            <button className='bg-primary text-white p-3 rounded' onClick={updateProfile}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
            }

        </>
    )
}

export default UpdateProfile
