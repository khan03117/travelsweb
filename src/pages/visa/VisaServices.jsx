// import React from 'react'

import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

const VisaServices = () => {
    const { slug } = useParams();
    let arr;
    if (slug == "services") {


        arr = [
            {
                title: "E- Visa Service & Visa Assistance",
                image: "https://aahiltours.com/public/assets/img/visa-assistance.jpg",
                content: `We provide the simplest solution to process your travel visa. We enable travelers to process visas from a computer, smartphone or tablet. Travelers no longer need to research or get frustrated dealing with different Governments. Travel agents, Destination Management Companies and Corporates can use our services to process any travel visa. We provide the best solution in the market.`
            },
            {
                title: "Visa Stamping Service",
                image: "https://aahiltours.com/public/assets/img/Visa-stamping-banner.jpg",
                content: `We provides the simplest solution to process for Visa Stamping service. We offer the best rates from the market.`
            },
            {
                title: "Tour Itinerary Service",
                image: "https://aahiltours.com/public/assets/img/Applying-for-UK-Student-Visa-Online.jpg",
                content: "We provides the simplest solution to process for Tour Itinerary service. We offer the best rates from the market."
            }
        ];
    }
    if (slug == "miscellaneous") {


        arr = [
            {
                title: "GAMCA Appointment",
                content: `You can book your medical examination appointment for GCC (Saudi Arabia, United Arab Emirates, Kuwait, Bahrain, Oman etc...) work visa`,
                image: "https://aahiltours.com/public/assets/img/ml-2.jpeg"
            },
            {
                title: "PCC Appointment",
                content: `These appointments will be released everyday based on their availability. Applicant can book new appointments and even can reschedule their already booked appointments accordingly`,
                image: "https://aahiltours.com/public/assets/img/ms-3.jpeg"
            },
            {
                title: "Passport services",
                image: "https://aahiltours.com/public/assets/img/ms-4.jpeg",
                content: `A passport is a travel document, usually issued by a country’s government to its citizens, that certifies the identity and nationality of its holders, primarily for the purpose of international travel. Indian passports are issued to the eligible citizens by the Ministry of External Affairs, through its Consular, Passport & Visa division. Our dedicated team of Passport Specialists can assist our esteemed clients in the following services for passports: New Passport, Passport Renewal, changes in information etc...`
            }
        ];
    }
    return (
        <>
            <section>
                <BreadCrumb path={['Home', 'Visa', 'Visa Services']} title={'Visa Services'} />
                {
                    arr.map((itm, index) => (
                        <>

                            <div className="container">
                                <div className={`grid grid-cols-12 gap-5 py-10 ${index % 2 != 0 ? '' : ''}`}>
                                    <div className={`col-span-6 ${index % 2 == 0 ? 'order-1' : 'order-2'}`}>
                                        <div className="w-full h-full">
                                            <img src={itm.image} alt={itm.image} className="w-full max-h-[400px] overflow-hidden object-cover rounded-lg shadow-md shadow-primary" />
                                        </div>
                                    </div>
                                    <div className={`col-span-6 ${index % 2 == 0 ? 'order-2' : 'order-1'}`}>
                                        <div className={`w-full p-5  ${index % 2 != 0 ? ' h-full rounded-lg relative bg-white/30 backdrop-blur-sm' : ''} `}>
                                            <h3 className="font-semibold pb-3 text-primary inline-block border-b border-primary text-2xl">{itm.title}</h3>
                                            <div className="w-full py-5">
                                                <div dangerouslySetInnerHTML={{ __html: itm?.content }} />
                                            </div>
                                            <div className="w-full mt-10">
                                                <Link to={'/apply-now?title='+itm.title} className="px-10 py-3 bg-teal-500 rounded-full text-white text-xs">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </section>
        </>
    )
}

export default VisaServices