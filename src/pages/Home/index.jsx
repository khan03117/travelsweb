import React from 'react'
// import banner1 from '../../assets/banner1.jpg';
// import banner2 from '../../assets/banner2.jpg';
import Testimonials from "./Testimonials";
// import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import SingleScreenBanner from "./banners/SingleScreenBanner";
import PackageLayoutOne from '../packages/elements/PackageLayoutOne';
// import AboutTwo from '../About/AboutTwo';
// import Visa from '../visa';
// import VisaSteps from '../visa/VisaSteps';
// import Faqs from '../Faq';
// import CtaLayoutOne from '../cta/CtaLayoutOne';
import Destinations from '../destinations';
import CtaLayoutTwo from "../cta/CtaLayoutTwo";
import axios from "axios";
import { API_URL, usertoken } from "../../utils";
// import { useParams } from 'react-router-dom';
import Bannertwo from './banners/Bannertwo';
import PackageLayoutTwo from '../packages/elements/PackageLayoutTwo';
import BannerThree from './banners/BannerThree';
// import PackageLayoutFour from '../packages/elements/PackageLayoutFour';
// import PackageLayoutFive from '../packages/elements/PackageLayoutFive';
import TestimonialLayoutThree from '../Testimonial/TestimonialLayoutThree';
import { useUser } from '../Account/UserContext';
import PackageLayoutThree from '../packages/elements/PackageLayoutThree';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import BannerFour from './banners/BannerFour';
import BannerFive from './banners/BannerFive';
import PackageLayoutFour from '../packages/elements/PackageLayoutFour';
import PackageLayoutFive from '../packages/elements/PackageLayoutFive';

const Home = () => {
  const { user } = useUser();
  const id = user.web_theme ?? 1;
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
        Authorization: usertoken
      }
    });
    console.log(resp.data);
  }
  React.useEffect(() => {
    getuser();
  }, []);
  if (!user) {
    return (
      <>
        <Loading className="min-h-lvh h-full" />
      </>
    )
  }
  return (
    <>
    {
      id == 4 && (
        <>
         <BannerFour/>
        </>
      )
    }
    {
      id == 5 && (
        <>
         <BannerFive/>
        </>
      )
    }
   
   
      {
        (id == 1) && (
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
      {
        (id == 3) && (
          <>
            <BannerThree />
          </>
        )
      }



      <Destinations />

      {/* <VisaSteps /> */}
      <section className="py-10 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-8 gap-4">
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

                  {
                    (id == 1) && (
                      <>
                        <div className="lg:col-span-4 col-span-12">
                          <Link to={'/package/show/' + itm.url}>
                            <PackageLayoutOne data={itm} />
                          </Link>
                        </div>
                      </>
                    )
                  }
                  {
                    (id == 2) && (
                      <>
                        <div className="lg:col-span-4 col-span-12">
                          <Link to={'/package/show/' + itm.url}>
                            <PackageLayoutTwo data={itm} />
                          </Link>
                        </div>

                      </>
                    )
                  }
                  {
                    (id == 3) && (
                      <>
                        <div className="lg:col-span-4 col-span-12">
                          <Link to={'/package/show/' + itm.url}>
                            <PackageLayoutThree data={itm} />
                          </Link>
                        </div>
                      </>
                    )
                  }
                  {
                    (id == 4) && (
                      <>
                        <div className="lg:col-span-4 col-span-12">
                          <Link to={'/package/show/' + itm.url}>
                            <PackageLayoutFour data={itm} />
                          </Link>
                        </div>
                      </>
                    )
                  }
                  {
                    (id == 5) && (
                      <>
                        <div className="lg:col-span-6 col-span-12">
                          <Link className='h-full block w-full' to={'/package/show/' + itm.url}>
                            <PackageLayoutFive data={itm} />
                          </Link>
                        </div>
                      </>
                    )
                  }
                </>

              ))
            }
            <div className="col-span-12 my-4">
              <div className="w-full text-center">
                <Link to={'/destinations'} className='bg-[var(--primary)] rounded-full px-10 hover:bg-opacity-75 py-2 lg:text-sm text-xs text-white'>View All</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaLayoutTwo />

      <Testimonials pb={'pb-10'} bg="bg-primary/10 hidden" />
      <TestimonialLayoutThree />
      {/* <Visa /> */}
      {/* <WhyUs /> */}
      <HowItWorks />

    </>
  )
}

export default Home