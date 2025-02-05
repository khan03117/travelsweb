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
import { API_URL, usertoken } from '../../../utils'
const SinglePackageOne = () => {
    const {url} = useParams();
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [mpackage, setPackage] = React.useState(false);
    const getpackage = async () => {
        const resp = await axios.get(API_URL + "package/show/"+url, {
            headers : {
                Authorization : usertoken
            }
        });
        setPackage(resp.data.data);
    }
    React.useEffect(() => {
        getpackage();
    }, []);
    return (
        <>

        {
            mpackage && (

           
            <section className='pb-20'>
                <img src={banner1} alt="" className="w-full h-96 object-cover block mb-10 object-bottom" />
                <div className="container my-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-9">


                            <div className="container">

                                <div className="grid grid-cols-12 gap-3 pb-10">
                                    <div className="col-span-12">
                                        <h1 className='section_title !mb-0'>
                                           {mpackage.title ?? mpackage?.activity_name ?? 'Not Available'}
                                        </h1>
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<WiDayCloudy />}
                                            title={`${mpackage.days}Days/${mpackage.nights}Nights`}
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<GoLocation />}
                                            title='Sharjah, United Arab Amirat '
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<RiVisaFill />}
                                            title='Visa Included'
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<PiBowlFood />}
                                            title='Meal Included'
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<PiAirplaneInFlightLight />}
                                            title='Flight Included'
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <PackageShortInfoWithIcon
                                            icon={<RiHotelLine />}
                                            title='Hotel 5 star'
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
                                        [1, 2, 3, 4, 5].map(ind => (
                                            <>

                                                <div className="col-span-12">
                                                    <Accordion open={open == ind} >
                                                        <AccordionHeader onClick={() => handleOpen(ind)}>
                                                            <div className="w-full">
                                                                Day {ind}. Arrival in Sharjah
                                                            </div>
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                            <>
                                                                We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.
                                                            </>
                                                        </AccordionBody>
                                                    </Accordion>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>
                                <div className="grid grid-cols-12 gap-10 my-10">
                                    <div className="col-span-6">
                                        <div className="w-full  included_ul rounded-lg px-5 py-5 bg-primary/10 h-full">
                                            <h4 className="mb-5 font-bold text-lg text-primary">Inclusions</h4>
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
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12">
                                        <div className="flex mb-5  *:pe-3 *:py-2 *:text-xs *:tracking-wider *:uppercase *:font-semibold gap-4">
                                            <button className='active border-b text-primary border-primary' >
                                                Cancellation Terms
                                            </button>
                                            <button>
                                                Terms & Conditions
                                            </button>
                                            <button>
                                                Contact Information
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="w-full p-5 bg-black/10 rounded">
                                            <ul className='list-inside list-disc'>
                                                <li>25% cancellation within 30 days from travel date</li>
                                                <li>50% cancellation within 16 days from travel date</li>
                                                <li>100% cancellation within 08 days from travel date or after issuing the voucher
                                                </li>
                                                <li>No Refund on any cancellation within 05 days prior&nbsp;to&nbsp;arrival
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="w-full p-5 shadow shadow-primary rounded">
                                <h4 className='font-bold text-[1.5rem]  text-primary mb-5 block' >Get Free Quotes</h4>
                                <form action="" method="post" className='*:pb-2'>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="">Enter Name</label>
                                        <input type="text" name="" className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="">Enter Email</label>
                                        <input type="text" name="" className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="">Enter Mobile</label>
                                        <input type="text" name="" className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="">Enter Date</label>
                                        <input type="text" name="" className="w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4" id="" />
                                    </div>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="">Enter Message</label>
                                        <textarea name="" className='w-full border border-primary/40 outline-none rounded py-3 text-xs ps-4' id=""></textarea>
                                    </div>
                                    <div className="form-group">
                                        <Button variant='gradient' color='teal' fullWidth>Send Query</Button>
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

export default SinglePackageOne