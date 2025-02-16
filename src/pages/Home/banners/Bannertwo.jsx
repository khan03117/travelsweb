// import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import banner1 from '../../../assets/banners/banner1.jpeg';
import banner2 from '../../../assets/banners/banner2.jpeg';
import banner3 from '../../../assets/banners/banner3.jpg';
import ContactForm from '../ContactForm';
const Bannertwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="w-full overflow-hidden" id="hero_banner" >
          <Slider {...settings}>
            {
              [banner1, banner2, banner3].map(bnr => (
                <>
                  <div className="w-full">
                    <img src={bnr} alt="" className="w-full" />
                  </div>
                </>
              ))
            }


          </Slider>
        </div>
        <div className="w-full flex items-center justify-center bg-black/50 hero_form absolute top-0 z-50 start-0 h-full">
          <div className="container w-full">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="lg:col-span-5 col-span-12">
                <div className="w-full lg:block hidden">
                  <ContactForm/>
                </div>
              </div>

              <div className="lg:col-span-7 col-span-12 ">
                <div className="w-full text-white lg:ps-20 p-4">
                  <h2 className="cursive lg:text-[3rem] text-[1.5rem] mb-5 font-bold">
                    Find your <br></br> perfect Enjoy
                  </h2>
                  <p className="lg:mb-10 mb-5 hero_p lg:text-md text-sm leading-[1.3]">
                    While perfection is an unattainable ideal, in this imagined partnership, we would complement each other in a beautifully imperfect harmony, bound by the threads of mutual respect, admiration, and love.
                  </p>
                  <div className="w-full flex  gap-4 lg:mt-5 mt-2">
                   
                    <Link to={'/login'} className="w-40 lg:py-4 py-2 bg-primary text-center inline-block text-white rounded btn">
                      Get Started
                    </Link>
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

export default Bannertwo