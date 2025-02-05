import React from 'react'
// import banner1 from '../../assets/banner1.jpg';
// import banner2 from '../../assets/banner2.jpg';

import Testimonials from "./Testimonials";
// import WhyUs from "./WhyUs";
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
import axios from "axios";
import { API_URL, usertoken } from "../../utils";
import { useParams } from 'react-router-dom';
import Bannertwo from './banners/Bannertwo';
import PackageLayoutTwo from '../packages/elements/PackageLayoutTwo';

const Home = () => {
  const { id } = useParams();
  const [packages, setPackages] = React.useState([]);
  const getpackages = async () => {
    const resp = await axios.get(API_URL + "package/most-viewed", {
      headers: {
        Authorization: usertoken
      }
    });
    setPackages(resp.data.data);
  }
  React.useEffect(() => {
    getpackages();
  }, []);
  const getuser = async () => {
    const resp = await axios.get(API_URL + "profile", {
      headers: {
        apikey: "DUMMY_API_KEY_1234567890"
      }
    });
    console.log(resp.data);
  }
  React.useEffect(() => {
    getuser();
  }, []);
  return (
    <>
      {
        (!id || id == 1) && (
          <>
            <SingleScreenBanner />
          </>
        )
      }
      {
        (id == 2) && (
          <>
            <Bannertwo />
          </>
        )
      }



      <Destinations />

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
              packages.map((itm) => (
                <>
                  <div className="col-span-4">
                    {
                      (!id || id == 1) && (
                        <>
                          <PackageLayoutOne data={itm} />
                        </>
                      )
                    }
                    {
                      (id == 2) && (
                        <>
                          <PackageLayoutTwo data={itm} />
                        </>
                      )
                    }
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </section>

      <CtaLayoutTwo />

      <Testimonials pb={'pb-10'} bg="bg-primary/10 hidden" />
      <Visa />
      {/* <WhyUs /> */}
      <HowItWorks />

      <Faqs />
    </>
  )
}

export default Home