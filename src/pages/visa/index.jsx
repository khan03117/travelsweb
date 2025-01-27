// import React from 'react'
import { useLocation } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import LayoutOne from './VisaLayout/LayoutOne'
import VisaSteps from './VisaSteps';
import Testimonials from '../Home/Testimonials';

const Visa = () => {
    const { pathname } = useLocation();
    return (
        <>
            {
                pathname == "/visa" && (
                    <>
                        <BreadCrumb path={['Home', 'Visa']} title={'Visa'} />
                    </>
                )
            }
            <section className='py-[5rem]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 mb-20 text-center">
                            <h2 className="section_title text-primary">Visa & Immigration</h2>
                            <p>
                                We help investors and entrepreneurs secure citizenship in major nations with our top immigration programs. We have a decade of experience assisting requirements.
                            </p>
                        </div>

                        <div className="col-span-3">
                            <div className="w-full">
                                <h2 className="text-[2rem] text-wrap cursive font-bold leading-[1.9]">
                                    Immigration <br />
                                    <span className="text-primary">services</span>  from
                                    Experienced.
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-3 border-s  border-t border-blue-gray-200">
                            <LayoutOne
                                title={'Education Visa'}
                                description={'Get assistance in securing your education visa for top destinations like the USA, Canada, UK, Australia, and more.'}
                            />
                        </div>
                        <div className="col-span-3  border-t border-blue-gray-200">
                            <LayoutOne
                                title={'Tourist Visa'}
                                description={'Explore the world with our seamless tourist visa processing.'}
                            />
                        </div>
                        <div className="col-span-3  border-t border-blue-gray-200">
                            <LayoutOne
                                title={'Work Visa'}
                                description={'Find the right work visa for your career abroad.'}
                            />
                        </div>
                        <div className="col-span-3 border-s border-t border-blue-gray-200">
                            <LayoutOne
                                title={'Dependent & Family Visa'}
                                description={'Find the right work visa for your career abroad.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <LayoutOne
                                title={'Business Visa'}
                                description={'Travel internationally for business meetings, conferences, and investments.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <LayoutOne
                                title={' PR & Immigration Visa'}
                                description={'Guidance for permanent residency and immigration applications.'}
                            />
                        </div>
                        <div className="col-span-3">
                            <LayoutOne
                                title={'Skilled Immigration'}
                                description={'Are you a skilled professional looking to work and settle abroad? Our Skilled Immigration Visa services help qualified individuals'}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {
                pathname == "/visa" && (
                    <>
                        <VisaSteps />
                        <Testimonials/>
                        <section className="pb-20"></section>
                    </>
                )
            }

        </>
    )
}

export default Visa