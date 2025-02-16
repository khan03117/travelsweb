// import React from 'react'
// import { useParams } from 'react-router-dom';
import about1 from '../../assets/about/1.jpg'
import about2 from '../../assets/about/2.jpg'
import { useUser } from '../Account/UserContext';
import HowItWorks from '../Home/HowItWorks';
// import Testimonials from '../Home/Testimonials';
import WorkSection from '../Home/WorkSection';
import AboutFour from './AboutFour';
import AboutThree from './AboutThree';
import AboutTwo from './AboutTwo';
import Vision from './AboutElements/Vision';
import TestimonialLayoutThree from '../Testimonial/TestimonialLayoutThree';
const About = () => {
    const {user} = useUser();
   const id = user.web_theme;
    // const { policies } = useUser();
    return (
        <>
            {
                id == 3 && (
                    <>

                        <section className='lg:py-20 py-10'>
                            <div className="container">
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="lg:col-span-6 col-span-12">
                                        <div className="w-full relative">
                                            <span className="ab-wel-3"></span>
                                            <img src={about1} alt="" className='ab-wel-1' />
                                            <img src={about2} alt="" className='ab-wel-2' />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 col-span-12">
                                        <div className="w-full aboutUs lg:mt-0 mt-10 ">
                                            <div className='w-[calc(100%-1rem)] ab-wel-rhs *:mb-5 text-wrap block' >
                                                {user.about_us}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
            {
                id == 2 && (
                    <>
                        <AboutTwo />
                    </>
                )
            }
            {
                id == 1 && (
                    <>
                        <AboutThree />
                    </>
                )
            }
            {
                id == 4 && (
                    <>
                        <AboutFour />
                    </>
                )
            }



            <WorkSection />
            <section className='py-[3rem]'  >
                <div className="container">
                    <div className="grid  gap-6 grid-cols-12">
                        <div className="lg:col-span-6 col-span-12">
                            <Vision title="Vision"
                                desc='To be a globally recognized leader in visa, immigration, tours, and travel consultancy, helping people build successful futures abroad and explore the world with ease. We aim to create a world where opportunities are accessible, migration is hassle-free, and travel experiences are enriching—ensuring a smooth and stress-free journey for our clients.'
                            />
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <Vision title="Mission"
                                desc="To provide seamless and reliable visa, immigration, and travel solutions, empowering individuals, families, and businesses to achieve their global dreams with trust, transparency, and professionalism. We strive to simplify complex immigration and travel processes while delivering exceptional service and expert guidance."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {
                id == 3 && (
                    <>
                        <TestimonialLayoutThree/>
                    </>
                )
            }
            {/* <Testimonials bg={"bg-primary/30"} pb={'pb-10'} /> */}
            <HowItWorks />
           
            <section className="py-10"></section>
        </>
    )
}

export default About
