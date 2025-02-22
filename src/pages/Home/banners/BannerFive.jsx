import React from 'react'
import bg1 from '../../../assets/banners/hbh1.jpg';
import bg2 from '../../../assets/banners/hbh2.jpg';
import bg3 from '../../../assets/banners/hbh3.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WaveSvg from '../../../components/WaveSvg';
import ContactForm from '../ContactForm';
const BannerFive = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Tra
  };
  const bannerdata = [
    {
      image: bg1,
      title: "Explore beauty of the world"
    },
    {
      image: bg2,
      title: "Natural wonder of the world"
    },
    {
      image: bg3,
      title: "Countryside Retreat at Tourm "
    }
  ]
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="w-full overflow-hidden" id="hero_banner" >
          <Slider {...settings}>
            {
              bannerdata.map((bnr, indx) => (
                <>
                  <div className="w-full relative z-10">
                    <img src={bnr.image} alt="" className="w-full" />
                    <div className=" absolute w-full h-full bannerFive  top-0 start-0">
                      <div className="grid grid-cols-12 h-full relative top-0">
                        <div className="col-span-8">
                          <div className="w-full h-full justify-center flex items-center ">
                            <div className="w-full text-center">
                              <h2 className={`text-white  cursive lg:text-[3rem] leading-[1.6] text-xl themetransition transition-all  duration-[1s] ease-linear font-bold ${activeSlide == indx ? 'lg:-translate-y-24' : ''}`}>
                                {bnr.title}
                              </h2>

                            </div>

                          </div>
                        </div>
                        
                        <div className="col-span-4 px-5 pt-2 pb-10">
                          <ContactForm />
                        </div>

                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </Slider>
        </div>

      </section>
      <div className="w-full " id="bannerFive">
        <WaveSvg />
      </div>
    </>
  )
}

export default BannerFive