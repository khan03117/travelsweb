// import React from 'react'
import testibg from '../../assets/testimonial/tmbg.png';
import testimg from '../../assets/testimonial/tm1.png'
import { NextArrow, PrevArrow } from '../../components/Arrows';
import Slider from "react-slick/lib/slider";
import profile1 from '../../assets/profile/men1.jpg';
import profile2 from '../../assets/profile/men2.jpg';
import pofile3 from '../../assets/profile/men3.jpg';
import { useUser } from '../Account/UserContext';
const TestimonialLayoutThree = () => {
    const {theme} = useUser();
    const testimonials = [
        {
            profile: profile1,
            name: "Emma James",
            location: "Keral, India",
            desc: "Our trip to Bali was absolutely incredible, ! From seamless bookings to well-planned itineraries, everything was perfect. The guides were friendly, knowledgeable, and made sure we had the best experience. Can't wait to book our next adventure with them!"
        },
        {
            profile: profile2,
            name: "Rahul Mehta",
            location: "Gujrat, India",
            desc: "I had the best vacation ever with [Your Company Name]! Their attention to detail, personalized services, and top-notch accommodations made our European tour unforgettable. Highly recommended for anyone looking for a stress-free and exciting travel experience!"
        },
        {
            profile: pofile3,
            name: "Sophie Martin",
            location: "Mandrid, Spain",
            desc: "From start to finish, [Your Company Name] made our dream trip to Japan a reality. The itinerary was well-balanced, and we got to explore hidden gems along with famous landmarks. Great service, amazing value, and wonderful memories!"
        }
    ];
    const tsettings = {
        arrows: false,
        dots: true, // Display navigation dots
        infinite: true, // Loop slides indefinitely
        speed: 1000, // Transition speed in ms (1 second)
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow className={'size-10 block bg-primary'} />,
        prevArrow: <PrevArrow className={'size-10 block bg-primary'} />,
        responsive: [
            {
                breakpoint: 1024, // For devices <= 1024px width
                settings: {
                    slidesToShow: 1,
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
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <div className="w-full relative overflow-hidden testimonialbg p-10 rounded-[2rem] bg-primary" style={{background : `${theme.primary}4D`}}>
                                <img src={testibg} alt="" className="absolute top-0 z-10 opacity-[0.4] start-0 w-[300px]" />
                                <div className="grid grid-cols-12 gap-4 relative z-50">
                                    <div className="col-span-12">
                                        <div className="w-full  text-center">
                                            <h2 className="section_title"> Overheard from travelers</h2>
                                        </div>
                                    </div>
                                    <div className="col-span-5 lg:block hidden">
                                        <div className="w-full h-full relative flex items-end">
                                            <img src={testimg} alt="" className="max-w-full relative -mb-10 " />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="w-full">
                                            <Slider  {...tsettings}>
                                                {
                                                    testimonials.map(itm => (
                                                        <>
                                                            <div className="w-full testimonial ">
                                                                <div className="w-full  lg:px-6 px-2">

                                                                    <img src={itm.profile} alt="" className=" profileTesti size-[130px] block object-cover object-top" />

                                                                    <div className="w-full border bg-white/40 backdrop-blur-sm rounded-[2rem] relative px-5 pt-16 pb-10  border-primary/50">


                                                                        <p className=" h-44 text-sm overflow-y-auto">
                                                                            {itm.desc}
                                                                        </p>
                                                                        <div className="w-full mt-5">
                                                                            <h4 className="cursive font-bold text-primary tracking-widest">{itm.name}</h4>
                                                                            <p className="font-light text-sm">{itm.location}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialLayoutThree