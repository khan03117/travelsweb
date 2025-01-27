// import React from 'react'
// import banner1 from '../../assets/banner1.jpg';
// import banner2 from '../../assets/banner2.jpg';

import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";

import SingleScreenBanner from "./banners/SingleScreenBanner";
import PackageLayoutOne from '../packages/elements/PackageLayoutOne';
// import AboutTwo from '../About/AboutTwo';
import Visa from '../visa';
// import VisaSteps from '../visa/VisaSteps';
import Faqs from '../Faq';
// import CtaLayoutOne from '../cta/CtaLayoutOne';
import Destinations from '../destinations';
import CtaLayoutTwo from "../cta/CtaLayoutTwo";
const Home = () => {

  return (
    <>
      <SingleScreenBanner />   
     
      <Destinations/>
     
      {/* <VisaSteps /> */}
      <section className="py-10 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <div className="w-full mb-10 text-center">
                <h2 className="section_title">
                  Plan the Trip of a Lifetime with Ease
                </h2>
                <p>
                  Whether youre looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
                </p>
              </div>
            </div>
            {
              [1, 2, 3, 4, 5, 6].map(() => (
                <>
                  <div className="col-span-4">
                    <PackageLayoutOne />
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </section>

      <CtaLayoutTwo/>
     
      <Testimonials pb={'pb-10'} bg="bg-primary/10" /> 
      <Visa />
      {/* <WhyUs /> */}
      <HowItWorks />
     
      <Faqs />
    </>
  )
}

export default Home