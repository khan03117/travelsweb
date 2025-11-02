import React from 'react'
import { WiDayCloudy } from 'react-icons/wi'
import banner1 from '../../../assets/banners/banner4.jpg'
import PackageShortInfoWithIcon from '../elements/Minielements/PackageShortInfoWithIcon'
import { GoLocation } from 'react-icons/go'
import { RiHotelLine } from 'react-icons/ri'
import { PiAirplaneInFlightLight, PiBowlFood } from 'react-icons/pi'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { WEB_API_URL, WEB_BASE_URL, WEB_Image_URL, WEB_SANCTUM_KEY } from '../../../utils'
import { MdEmojiTransportation } from 'react-icons/md'
// import { toast } from 'react-toastify'
import Loading from '../../../components/Loading'
import QuoteForm from './QuoteForm'
import Slider from "react-slick/lib/slider";
import { NextArrow, PrevArrow } from '../../../components/Arrows'
import { IoDocumentTextOutline } from 'react-icons/io5'
const SinglePackageOne = () => {
    const [loading, setLoading] = React.useState(true);
    const { url } = useParams();
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open == value ? 0 : value);
    const [idata, setItinerary] = React.useState({});
    const [mpackage, setPackage] = React.useState(false);
    const [activebtn, setActive] = React.useState(0);
    const settings = [
        {
            "id": 10,
            "type": "transportation_type",
            "parent_id": null,
            "title": null,
            "col_val": "SIC Basis",
            "image": null,
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 9,
            "type": "transportation_type",
            "parent_id": null,
            "title": null,
            "col_val": "Private Basis",
            "image": null,
            "created_at": null,
            "updated_at": null
        }
    ];
    // const [fdata, setFdata] = React.useState({});
    // const [country, setCountry] = React.useState([]);
    const [images, setImages] = React.useState([]);
    const tsettings = {
        centerMode: true,
        arrows: true,
        dots: false, // Display navigation dots
        infinite: true, // Loop slides indefinitely
        speed: 1000, // Transition speed in ms (1 second)
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow className={'size-10 block !text-white'} />,
        prevArrow: <PrevArrow className={'size-10 block !text-white'} />,
        responsive: [
            {
                breakpoint: 1024, // For devices <= 1024px width
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000, // Slower autoplay for larger screens
                    speed: 1200, // Slower fade transition for smoother UX
                },
            },
            {
                breakpoint: 768, // For devices <= 768px width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000, // Faster autoplay on smaller devices
                    speed: 1000, // Standard fade speed
                    dots: false, // Hide navigation dots for a cleaner look on small screens
                },
            },
            {
                breakpoint: 480, // For devices <= 480px width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2500, // Faster autoplay for better engagement
                    dots: false, // Hide dots on very small screens
                    speed: 800, // Even faster transition speed
                },
            },
        ],
    };
    const getpackage = async () => {
        setLoading(true);
        const resp = await axios.get(WEB_API_URL + "all-packages", {
            headers: {
                Authorization: WEB_SANCTUM_KEY
            },
            params: {
                url: url
            }
        });
        setItinerary(resp.data.itinerary)

        setPackage(resp.data.data[0]);
        setLoading(false);
    }
    const getimages = () => {
        // const arr = Object.values(idata);
        // if (arr) {
        //     const irr = [];
        //     arr.map(ar => {
        //         ar.map(itm => {
        //             irr.push(itm.main_image);
        //         })

        //     });
        //     setImages(irr);
        // }
        setImages([]);
    }
    React.useEffect(() => {
        getimages();
    }, [idata]);
    React.useEffect(() => {
        getpackage();
    }, [url]);
    return (
        <>
            {
                (loading || !mpackage) ? (
                    <>
                        <Loading height={'min-h-lvh h-full'} />
                    </>
                ) : (
                    <>



                        {
                            mpackage && (
                                <section className='pb-20'>
                                    <img src={mpackage?.main_image ? WEB_Image_URL + "assets/images/" + mpackage?.main_image : banner1} alt="" className="w-full lg:h-96 h-60 object-cover block mb-10 object-bottom" />
                                    {
                                        images.length > 0 && (
                                            <>
                                                <section>
                                                    <div className="container mx-auto">
                                                        <div className="col-span-12">
                                                            <div className="w-full">
                                                                <Slider  {...tsettings}>
                                                                    {
                                                                        images.map(itm => (
                                                                            <>
                                                                                <div className="w-full p-4 pb-10 pt-6">
                                                                                    <img src={"https://b2b.aahiltours.com/v2/public/assets/images/" + itm} alt="" className="w-full h-80 object-cover" />
                                                                                </div>
                                                                            </>
                                                                        ))
                                                                    }
                                                                </Slider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                            </>
                                        )
                                    }
                                    <div className="container my-4">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-8 col-span-12">
                                                <div className="container">
                                                    <div className="grid grid-cols-12 gap-3 pb-10">
                                                        <div className="col-span-12">
                                                            <h1 className='section_title'>
                                                                {mpackage.package_title}
                                                            </h1>
                                                            {
                                                                (mpackage.tour_category != "umrah" && mpackage?.sharing?.length > 0) && (
                                                                    <>
                                                                        <div className="w-full">

                                                                            <h4 className='font-bold text-xl mb-6'>
                                                                                Cost : ₹  {
                                                                                    mpackage?.sharing && mpackage?.sharing[0]?.amount_b2c
                                                                                } / person
                                                                            </h4>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                            <p className='text-md text-gray-600'>Package ID : 892982{mpackage.id}</p>
                                                        </div>
                                                        {mpackage.tour_category != "umrah" && (
                                                            <>
                                                                <div className="lg:col-span-4 col-span-6">
                                                                    <PackageShortInfoWithIcon
                                                                        icon={<WiDayCloudy />}
                                                                        title={`${mpackage.days}Days/${mpackage.nights}Nights`}
                                                                    />
                                                                </div>
                                                                <div className="lg:col-span-4 col-span-6">
                                                                    <PackageShortInfoWithIcon
                                                                        icon={<GoLocation />}
                                                                        title={`${mpackage?.state ? mpackage?.state?.state : mpackage.cities.map(itm => itm.state)?.join(',')}`}
                                                                    />
                                                                </div>
                                                                {
                                                                    mpackage.is_visa > 0 && (
                                                                        <>
                                                                            <div className="lg:col-span-4 col-span-6">
                                                                                <PackageShortInfoWithIcon
                                                                                    icon={<IoDocumentTextOutline />}
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
                                                                                    title={
                                                                                        settings.find(obj => obj.id == mpackage.is_transportation)?.col_val
                                                                                    }
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
                                                                        title={mpackage.hotel ? mpackage?.hotel : mpackage.cities?.[0]?.hotel_type}
                                                                    />
                                                                </div>
                                                            </>
                                                        )}



                                                        {
                                                            (mpackage.tour_category != "umrah") && (
                                                                <>
                                                                    <div className="col-span-12">
                                                                        <table className="w-full">
                                                                            <thead>
                                                                                <tr className='*:p-2 *:lg:text-lg *:text-start *:text-sm *:border *:border-gray-400'>
                                                                                    <th>City</th>
                                                                                    <th>Category</th>
                                                                                    <th>Duration</th>

                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    mpackage.cities.map(cit => (
                                                                                        <tr className='*:p-2 *:lg:text-lg *:text-sm *:border *:border-gray-400' key={cit.id}>

                                                                                            <td>
                                                                                                {cit.state}
                                                                                            </td>
                                                                                            <td>
                                                                                                {cit.hotel_type}
                                                                                            </td>
                                                                                            <td>
                                                                                                {cit.duration} Nights
                                                                                            </td>

                                                                                        </tr>
                                                                                    ))
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                    </div>
                                                    <div className="grid grid-cols-12 gap-6">

                                                        {
                                                            mpackage.activities && mpackage.activities.length > 0 && mpackage.activities.map((actv) => (
                                                                <>

                                                                    <div key={actv.day} className="col-span-12">
                                                                        <Accordion open={open == actv.day} >
                                                                            <AccordionHeader className='lg:text-xl text-sm' onClick={() => handleOpen(actv.day)}>
                                                                                <div className="w-full lg:text-xl text-sm">
                                                                                    Day {actv.day}.  {actv?.activities[0].activity.activity_name}
                                                                                </div>
                                                                            </AccordionHeader>
                                                                            <AccordionBody>
                                                                                <>
                                                                                    <div className="dynamicContent">
                                                                                        {
                                                                                            actv.activities && actv.activities.map(itm => (
                                                                                                <>
                                                                                                    <div className="grid grid-cols-12 gap-10">
                                                                                                        <div className="lg:col-span-4 col-span-12">
                                                                                                            <img src={WEB_BASE_URL + "public/assets/images/" + itm?.activity?.main_image} alt="" className="w-full" />
                                                                                                        </div>
                                                                                                        <div className="lg:col-span-8 col-span-12">
                                                                                                            <h4>
                                                                                                                {itm.activity.activity_name}
                                                                                                            </h4>
                                                                                                            <div dangerouslySetInnerHTML={{ __html: itm?.activity?.description }} />

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



                                                    <div className="col-span-12">
                                                        <div dangerouslySetInnerHTML={{ __html: mpackage?.description }}></div>
                                                    </div>

                                                    <div className="grid lg:grid-cols-12 grid-cols-6 mb-10 gap-10">
                                                        <div className="col-span-6">
                                                            <div className="w-full   rounded-lg px-5 py-5  h-full">
                                                                <h4 className="mb-5 font-bold lg:text-lg text-sm text-primary">Inclusions</h4>
                                                                <div className='included_ul' dangerouslySetInnerHTML={{ __html: mpackage.inclusive }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <div className="w-full  rounded-lg px-5 py-5 bg-red-50 h-full">
                                                                <h4 className="mb-5 font-bold text-lg text-red-700">Exclusions</h4>

                                                                <div className='excluded_ul' dangerouslySetInnerHTML={{ __html: mpackage.excusive }}></div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="grid grid-cols-12 mb-10">
                                                        <div className="col-span-12">
                                                            <div className="flex mb-5  *:pe-3 *:py-2 *:text-xs *:tracking-wider *:uppercase *:font-semibold gap-4">
                                                                {
                                                                    [' Terms & Conditions', 'Booking Policy'].map((itm, index) => (
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
                                                            <div className="w-full termssection p-5 bg-[#f8f8f3] rounded">
                                                                {
                                                                    activebtn == 0 && (
                                                                        <>
                                                                            <div className='p-5 *:text-gray-600' dangerouslySetInnerHTML={{ __html: mpackage?.terms }} />
                                                                        </>
                                                                    )
                                                                }
                                                                {/* {
                                                                    activebtn == 1 && (
                                                                        <>
                                                                            <div dangerouslySetInnerHTML={{ __html: mpackage?.terms }} />
                                                                        </>
                                                                    )
                                                                } */}
                                                                {
                                                                    activebtn == 1 && (
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

                                                {
                                                    (mpackage.tour_category == "umrah" && mpackage?.sharing.length > 0) && (
                                                        <>
                                                            <div className="col-span-12 my-10">
                                                                <h4 className="text-[var(--primary)] text-3xl mb-5 font-bold">Package Cost</h4>
                                                                <table className="w-full">
                                                                    <thead>
                                                                        <tr className='*:p-4 *:font-bold *:text-start *:lg:text-lg *:text-sm *:border *:border-gray-400'>
                                                                            <th>Sharing Type</th>
                                                                            <th>Cost</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            mpackage?.sharing && mpackage?.sharing.map(itm => (
                                                                                <tr className='*:p-2 *:lg:text-lg *:text-sm *:border *:border-gray-400' key={itm.id}>
                                                                                    <td className=' capitalize'>
                                                                                        {itm.sharing}
                                                                                    </td>
                                                                                    <td className=' capitalize'>
                                                                                        {itm.amount_b2c} per person
                                                                                    </td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </>
                                                    )
                                                }


                                                <QuoteForm id={mpackage.id} />
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