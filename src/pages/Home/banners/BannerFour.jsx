import React from 'react'
import bg1 from '../../../assets/banners/banner5.webp';
import bg2 from '../../../assets/banners/hbh2.jpg';
import bg3 from '../../../assets/banners/hbh3.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from '@material-tailwind/react';
import { FlexWithIcon } from './elements/FlexWithIcon';
import { ImTicket } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import SvgBg from '../../../components/SvgBg';
const BannerFour = () => {
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
      <section className="overflow-hidden relative bannerFour">
        <div className="w-full overflow-hidden relative z-[10]" id="hero_banner" >
          <Slider {...settings}>
            {
              bannerdata.map((bnr, indx) => (
                <>
                  <div className="w-full relative z-[20]">
                    <img src={bnr.image} alt="" className="w-full" />
                    <div className=" absolute w-full bannerfouroverlay z-[10] h-full  top-0 start-0">
                      <div className="grid grid-cols-12 h-full relative top-10">
                        <div className="col-span-12">
                          <div className="w-full h-full justify-center flex items-center ">
                            <div className="w-1/2 text-center">
                              <h2 className={`text-white  cursive lg:text-[3rem] leading-[1.6] text-xl themetransition transition-all  duration-[1s] ease-linear font-bold ${activeSlide == indx ? 'lg:-translate-y-24' : ''}`}>
                                {bnr.title}
                              </h2>
                              <div className="w-full lg:block z-50 top-0 hidden relative ">
                                <div className="w-full rounded-full p-4 bg-white shadow-md shadow-black/40">
                                  <div className="grid grid-cols-12 gap-5 gap-x-10">
                                    <div className="col-span-3">

                                      <FlexWithIcon
                                        icon={<MdLocationOn />}
                                        title={'Destinations'}
                                        count={'100+'}
                                      />
                                    </div>
                                    <div className="col-span-3">
                                      <FlexWithIcon
                                        icon={<ImTicket />}
                                        title={'Packages'}
                                        count={'500+'}
                                      />
                                    </div>
                                    <div className="col-span-6 text-end">
                                      <Button variant='gradient' className='rounded-full px-16 py-4 ' color='teal' >Explore</Button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>
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
      <div className="w-full relative -top-10">
      <SvgBg />
      </div>
    
    </>
  )
}

export default BannerFour