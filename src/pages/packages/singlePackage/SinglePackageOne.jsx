import React from 'react'
import { WiDayCloudy } from 'react-icons/wi'
import banner1 from '../../../assets/banners/banner4.jpg'
import PackageShortInfoWithIcon from '../elements/Minielements/PackageShortInfoWithIcon'
import { GoLocation } from 'react-icons/go'
import { RiHotelLine, RiVisaFill } from 'react-icons/ri'
import { PiAirplaneInFlightLight, PiBowlFood } from 'react-icons/pi'
import { Accordion, AccordionBody, AccordionHeader, Button } from '@material-tailwind/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL, Image_URL, usertoken } from '../../../utils'
import { MdEmojiTransportation } from 'react-icons/md'
import { toast } from 'react-toastify'
import Loading from '../../../components/Loading'
const SinglePackageOne = () => {
    const [loading, setLoading] = React.useState(true);
    const { url } = useParams();
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [idata, setItinerary] = React.useState({});
    const [mpackage, setPackage] = React.useState(false);
    const [activebtn, setActive] = React.useState(0);
    const [fdata, setFdata] = React.useState({});
    const [country, setCountry] = React.useState([]);
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
    const savecontactquery = async () => {
        const data = { ...fdata, ['package_id']: mpackage.id }
        const resp = await axios.post(API_URL + "contact-query", data, {
            headers: {
                Authorization: usertoken
            }
        });
        if (resp.data.success) {
            toast.success('query saved successfully');
            setFdata({});
        }
    }
    const getpackage = async () => {
        setLoading(true);
        const resp = await axios.get(API_URL + "package/show/" + url, {
            headers: {
                Authorization: usertoken
            }
        });
        setItinerary(resp.data.itinerary)
        setCountry(resp.data.countries)
        setPackage(resp.data.data);
        setLoading(false);


    }
    React.useEffect(() => {
        getpackage();
    }, []);
    return (
        <>
            {
                loading ? (
                    <>
                        <Loading height={'min-h-lvh h-full'} />
                    </>
                ) : (
                    <>


                        {
                            mpackage && (


                                <section className='pb-20'>
                                    <img src={mpackage?.main_image ? Image_URL + "assets/images/" + mpackage?.main_image : banner1} alt="" className="w-full lg:h-96 h-60 object-cover block mb-10 object-bottom" />
                                    <div className="container my-4">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-8 col-span-12">
                                                <div className="container">

                                                    <div className="grid grid-cols-12 gap-3 pb-10">
                                                        <div className="col-span-12">
                                                            <h1 className='section_title !mb-0'>
                                                                {mpackage.title}
                                                            </h1>
                                                        </div>
                                                        <div className="lg:col-span-4 col-span-6">
                                                            <PackageShortInfoWithIcon
                                                                icon={<WiDayCloudy />}
                                                                title={`${mpackage.days}Days/${mpackage.nights}Nights`}
                                                            />
                                                        </div>
                                                        <div className="lg:col-span-4 col-span-6">
                                                            <PackageShortInfoWithIcon
                                                                icon={<GoLocation />}
                                                                title={`${mpackage.state?.state},${country[0].country}`}
                                                            />
                                                        </div>
                                                        {
                                                            mpackage.is_visa && (
                                                                <>
                                                                    <div className="lg:col-span-4 col-span-6">
                                                                        <PackageShortInfoWithIcon
                                                                            icon={<RiVisaFill />}
                                                                            title='Visa Included'
                                                                        />
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        {
                                                            mpackage.is_transportation > 0 && (
                                                                <>
                                                                    <div className="lg:col-span-4 col-span-6">
                                                                        <PackageShortInfoWithIcon
                                                                            icon={<MdEmojiTransportation />}
                                                                            title='Transportation Included'
                                                                        />
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        {
                                                            mpackage.meal && (
                                                                <>
                                                                    <div className="lg:col-span-4 col-span-6">
                                                                        <PackageShortInfoWithIcon
                                                                            icon={<PiBowlFood />}
                                                                            title={mpackage.meal}
                                                                        />
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                        {
                                                            mpackage.is_flight && (
                                                                <>
                                                                    <div className="lg:col-span-4 col-span-6">
                                                                        <PackageShortInfoWithIcon
                                                                            icon={<PiAirplaneInFlightLight />}
                                                                            title='Flight Included'
                                                                        />
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                        <div className="lg:col-span-4 col-span-6">
                                                            <PackageShortInfoWithIcon
                                                                icon={<RiHotelLine />}
                                                                title={mpackage.hotel}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-12 gap-6">
                                                        <div className="col-span-12 mb-2">
                                                            <div className="w-full">
                                                                <h2 className='text-[1.6rem] font-bold'>Itinerary</h2>
                                                            </div>
                                                        </div>
                                                        {
                                                            Object.entries(idata).map(([d, v], ind) => (
                                                                <>

                                                                    <div key={d} className="col-span-12">
                                                                        <Accordion open={open == ind} >
                                                                            <AccordionHeader onClick={() => handleOpen(ind)}>
                                                                                <div className="w-full">
                                                                                    Day {ind + 1}. {v[0]?.activity_name}
                                                                                </div>
                                                                            </AccordionHeader>
                                                                            <AccordionBody>
                                                                                <>
                                                                                    <div className="dynamicContent">
                                                                                        {
                                                                                            v.map(itm => (
                                                                                                <>
                                                                                                    <div className="grid grid-cols-12 gap-10">
                                                                                                        <div className="col-span-4">
                                                                                                            <img src={Image_URL + "assets/images/" + itm.main_image} alt="" className="w-full" />
                                                                                                        </div>
                                                                                                        <div className="col-span-8">
                                                                                                            <div dangerouslySetInnerHTML={{ __html: itm?.description }} />

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </>
                                                                                            ))
                                                                                        }
                                                                                    </div>
                                                                                </>
                                                                            </AccordionBody>
                                                                        </Accordion>
                                                                    </div>
                                                                </>
                                                            ))
                                                        }

                                                    </div>
                                                    <div className="grid lg:grid-cols-12 grid-cols-6 mb-10 gap-10">
                                                        <div className="col-span-6">
                                                            <div className="w-full  included_ul rounded-lg px-5 py-5  h-full">
                                                                <h4 className="mb-5 font-bold lg:text-lg text-sm text-primary">Inclusions</h4>
                                                                <ul>
                                                                    <li>
                                                                        Hotel accommodation with breakfast (Based on Twin Sharing/ triple sharing).
                                                                    </li>
                                                                    <li>
                                                                        All airport-hotel-airport without guide  and tour excursion transfers with English speaking guide.
                                                                    </li>
                                                                    <li>
                                                                        Meals as mention program ( SIC tour stand local food only).
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <div className="w-full excluded_ul rounded-lg px-5 py-5 bg-red-50 h-full">
                                                                <h4 className="mb-5 font-bold text-lg text-red-700">Exclusions</h4>

                                                                <ul>
                                                                    <li>
                                                                        Personal expenses such as drinks at meals,
                                                                    </li>
                                                                    <li>
                                                                        üIssuance, Air tickets
                                                                    </li>
                                                                    <li>
                                                                        Upgrade meals / surcharge for Indian food
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-12 mb-10">
                                                        <div className="col-span-12">
                                                            <div className="flex mb-5  *:pe-3 *:py-2 *:text-xs *:tracking-wider *:uppercase *:font-semibold gap-4">
                                                                {
                                                                    [ ' Terms & Conditions', ' Contact Information'].map((itm, index) => (
                                                                        <>
                                                                            <button onClick={() => setActive(index)} className={` ${index == activebtn ? 'active  border-b text-primary border-primary' : ''} `} >
                                                                                {itm}
                                                                            </button>
                                                                        </>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-span-12">
                                                            <div className="w-full p-5 bg-black/10 rounded">
                                                                {
                                                                    activebtn == 0 && (
                                                                        <>
                                                                            <div dangerouslySetInnerHTML={{ __html: mpackage?.terms }} />
                                                                        </>
                                                                    )
                                                                }
                                                                {
                                                                    activebtn == 1 && (
                                                                        <>
                                                                            <div dangerouslySetInnerHTML={{ __html: mpackage?.terms }} />
                                                                        </>
                                                                    )
                                                                }
                                                                {
                                                                    activebtn == 2 && (
                                                                        <>
                                                                            <div dangerouslySetInnerHTML={{ __html: mpackage?.policy }} />
                                                                        </>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 col-span-12">
                                                <div className="w-full p-5 sticky top-0 shadow shadow-primary rounded">
                                                    <h4 className='font-bold text-[1.5rem]  text-primary mb-5 block' >Get Free Quotes</h4>
                                                    <form action="" method="post" className='*:pb-2'>
                                                        <div className="form-group">
                                                            <label className='form-label' htmlFor="">Enter Name</label>
                                                            <input type="text" name="name" onChange={handleFdata} className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='form-label' htmlFor="">Enter Email</label>
                                                            <input type="text" name="email" onChange={handleFdata} className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='form-label' htmlFor="">Enter Mobile</label>
                                                            <input type="text" name="mobile" onChange={handleFdata} className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='form-label' htmlFor="">Expected Date</label>
                                                            <input type="date" name="expected_date" onChange={handleFdata} className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className='form-label' htmlFor="">Enter Message</label>
                                                            <textarea name="message" onChange={handleFdata} className='w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4' id=""></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <Button onClick={savecontactquery} variant='gradient' color='teal' fullWidth>Send Query</Button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default SinglePackageOne