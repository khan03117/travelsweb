import { FileImageOutlined } from '@ant-design/icons'
// import React from 'react'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import aboutimg from '../../assets/about/about-1.webp'
import BreadCrumb from '../../components/BreadCrumb'
import Vision from './AboutElements/Vision'
import Testimonials from '../Home/Testimonials'
// import CtaLayoutTwo from '../cta/CtaLayoutTwo'
const AboutTwo = () => {
    return (
        <>
            
            <BreadCrumb path={['Home', 'About']} title={'About us'} />
            <section className='py-[3rem]'>
                <div className="container">
                    <div className="w-full mb-20 text-start">
                        <h2 className='section_title'>
                            About Us
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae exercitationem officia repellendus harum vero voluptas cupiditate veritatis dolorum distinctio?
                        </p>
                    </div>
                    <div className="grid grid-cols-12 items-center gap-5">
                        <div className="col-span-5">
                            <div className="w-full">
                                <img src={aboutimg} alt="" className="w-full" />
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className="w-full p-5">
                                <h2 className="text-3xl font-bold mb-4 text-primary">
                                    Explore Beyond the Horizon: Discover the World’s Wonders
                                </h2>
                                <p className='py-2 text-md font-light'>
                                    We pride themselves on offering personalized services for high-end clientele, with a commitment to crafting unique and unforgettable travel experiences
                                </p>
                                <p className='py-2 text-md font-light'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believabl
                                </p>
                                <ul className='py-3 *:py-3'>
                                    <li>
                                        <div className="flex gap-2">
                                            <span className="flex justify-center items-center text-2xl  bg-red-500 text-white  size-16 text-center rounded-full">
                                                <FileImageOutlined />
                                            </span>
                                            <div className="w-[calc(100%-6rem)]">
                                                <span className='py-2 text-md font-light'>
                                                    lients navigate their journeys, whether for travel or educational purposes, primarily in Canada, the U.S., and the U.K
                                                </span>
                                            </div>
                                        </div>


                                    </li>
                                    <li>
                                        <div className="flex gap-2">
                                            <span className="flex justify-center items-center text-2xl  bg-purple-500 text-white  size-16 text-center rounded-full">
                                                <TiWeatherWindyCloudy />
                                            </span>
                                            <div className="w-[calc(100%-6rem)]">
                                                <span className='py-2 text-md font-light'>
                                                    lients navigate their journeys, whether for travel or educational purposes, primarily in Canada, the U.S., and the U.K
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='py-[3rem]'  >
                <div className="container">
                    <div className="grid  gap-6 grid-cols-12">
                        <div className="col-span-6">
                            <Vision title="Vision"
                            desc='To be a globally recognized leader in visa, immigration, tours, and travel consultancy, helping people build successful futures abroad and explore the world with ease. We aim to create a world where opportunities are accessible, migration is hassle-free, and travel experiences are enriching—ensuring a smooth and stress-free journey for our clients.' 
                             />
                        </div>
                        <div className="col-span-6">
                            <Vision  title="Mission" 
                            
                            desc="To provide seamless and reliable visa, immigration, and travel solutions, empowering individuals, families, and businesses to achieve their global dreams with trust, transparency, and professionalism. We strive to simplify complex immigration and travel processes while delivering exceptional service and expert guidance."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <CtaLayoutTwo/> */}
            <Testimonials pb={'pb-20'}/>

          


        </>
    )
}

export default AboutTwo