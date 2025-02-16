import React from 'react'
// import { Link } from 'react-router-dom'
import Slider from "react-slick";
// import banner1 from '../../../assets/banners/bg-1.jpg';
// import banner2 from '../../../assets/banners/bg-2.jpg';
// import banner3 from '../../../assets/banners/banner1.jpg';
import overlay from '../../../assets/banners/bg-overlay.png';
import banner1 from '../../../assets/banners/bg-1.jpg';
import banner2 from '../../../assets/banners/bg-2.jpg';
import banner3 from '../../../assets/banners/bg-1.jpg';
import { Link } from 'react-router-dom';
// import ContactForm from '../ContactForm';
const BannerThree = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
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
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Track a
  };
  const arr = [
    {
      image: banner1,
      title: "Discover & book extraordinary trips",
      desc: "Save up to 50% on the best attractions, tours and activities with Havezic"
    },
    {
      image: banner2,
      title: "Hot deals on  expedition departures",
      desc: "Save up to 50% on the best attractions, tours and activities with Havezic"

    },
    {
      image: banner3,
      title: "Travel Exprience that never ends",
      desc: "Get exclusive offers and travel deals"
    }
  ];
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="w-full overflow-hidden  " id="hero_banner" >
          <Slider {...settings}>
            {
              arr.map((bnr, indx) => (
                <>
                  <div className="w-full  h-full">
                    <img src={overlay} alt="" className="absolute z-40 opacity-[0.5] top-0 start-0 w-full h-full" />
                    <img src={bnr.image} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-full h-full justify-center  flex items-center absolute z-50  top-0 start-0 ">
                    <div className="lg:w-1/2 lg:p-0 p-5 md:w-full sm:w-full text-center *:transition-all" >
                      <h2 className={`text-white  cursive lg:text-[3rem] leading-[1.6] text-xl themetransition transition-all  duration-[1s] ease-linear font-bold ${activeSlide == indx ? 'lg:-translate-y-24' : ''}`}>{bnr.title}</h2>
                      <p className={`lg:text-lg text-sm text-white font-light themetransition tracking-widest mt-5  duration-[3s] transition-all ${activeSlide == indx ? 'lg:-translate-y-24' : ''} `}>{bnr.desc}</p>
                      <Link className={`px-20 inline-block mt-5 py-3 bg-primary themetransition text-white rounded-full ${activeSlide == indx ? 'lg:-translate-y-24' : ''} `} to={'/destinations'}>Explore</Link>
                    </div>
                  </div>
                </>
              ))
            }
          </Slider>
        </div>

      </section>

    </>
  )
}

export default BannerThree
