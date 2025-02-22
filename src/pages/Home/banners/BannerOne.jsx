// import React from 'react'
import Slider from 'react-slick';

const BannerOne = () => {
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
                            [].map(bnr => (
                                <>
                                    <div className="w-full">
                                        <img src={bnr.image} alt="" className="w-full" />
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

export default BannerOne