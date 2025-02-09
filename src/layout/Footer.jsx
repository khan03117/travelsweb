// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useUser } from '../pages/Account/UserContext'
import { EnvironmentOutlined, FacebookFilled, GoogleSquareFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';
import { IoIosCall, IoMdMail } from 'react-icons/io';

const Footer = () => {
    const { user } = useUser();
    return (
        <>
            <div className="w-full  overflow-x-hidden relative">
                <section className='relative lg:block hidden z-10 '>
                    <div className="w-full -mb-10">
                        <div className="container ">
                            <div className="grid grid-cols-12">
                                <div className="col-span-1"></div>
                                <div className="col-span-10">
                                    <div className="w-full overflow-hidden text-center text-white bg-primary p-8 rounded-lg">
                                        <h2 className='text-xl '><span className='cursive'>Free support: </span>
                                            <div className='inline-block'  >{user.mobile}</div>
                                            &nbsp;&nbsp;|&nbsp;&nbsp; <span className='cursive'>Email: </span>
                                            <div className='inline-block'>{user.email}</div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-gray-300 rounded-lg  py-20">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="lg:col-span-3 col-span-12">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className=" col-span-12">
                                        <div className="footer-widgets w-full">
                                            <div className="logimg mb-4"><img src={logo}
                                                width="90" alt="" className="img-fluid" /></div>
                                            <ul className='flex gap-4'>
                                                <li>
                                                    {
                                                        user.facebook && (
                                                            <>
                                                                <Link to={'/'} className="inline-block size-10 rounded-full border border-primary text-center leading-10 text-primary hover:bg-primary hover:text-white ">
                                                                    <FacebookFilled />
                                                                </Link>
                                                            </>
                                                        )
                                                    }


                                                </li>
                                                {
                                                    user.twitter && (
                                                        <>
                                                            <li>

                                                                <Link to={'/'} className='inline-block size-10 rounded-full border border-primary text-center leading-10 text-primary hover:bg-primary hover:text-white '>
                                                                    <TwitterSquareFilled />
                                                                </Link>

                                                            </li>
                                                        </>
                                                    )
                                                }
                                                {
                                                    user.instagram && (
                                                        <>
                                                            <li>
                                                                <Link to={'/'} className="inline-block size-10 rounded-full border border-primary text-center leading-10 text-primary hover:bg-primary hover:text-white ">
                                                                    <InstagramFilled />
                                                                </Link>

                                                            </li>
                                                        </>
                                                    )
                                                }
                                                {
                                                    user.linkedin && (
                                                        <>
                                                            <li>
                                                                <Link to={'/'} className="inline-block size-10 rounded-full border border-primary text-center leading-10 text-primary hover:bg-primary hover:text-white ">
                                                                    <GoogleSquareFilled />
                                                                </Link>

                                                            </li>
                                                        </>
                                                    )
                                                }



                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" lg:col-span-9 col-span-12 mr-top-footer">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="lg:col-span-3 col-span-12">
                                        <div className="footer-widget">
                                            <h4 className="widget-title cursive text-2xl  font-bold text-primary">Support</h4>
                                            <ul className="list-unstyled *:py-2">
                                                <li><Link to="/login">Getting started</Link></li>

                                                <li><Link to="/contact">Help center</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 col-span-12">
                                        <div className="footer-widget">
                                            <h4 className="widget-title cursive text-2xl  font-bold text-primary">Services</h4>
                                            <ul className="list-unstyled *:py-2">
                                                {/* <li><Link to="/plans">Pricing</Link></li> */}
                                                <li><Link to="/contact">Support</Link></li>

                                                <li><Link to="/faqs">Faq’s</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 col-span-12">
                                        <div className="footer-widget">
                                            <h4 className="widget-title cursive text-2xl  font-bold text-primary">Policy</h4>
                                            <ul className="list-unstyled *:py-2">
                                                <li><Link to="/policy/diclaimer">Disclaimer</Link></li>
                                                <li><Link to="/policy/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link to="/policy/terms-conditions">Terms &amp; Conditions</Link></li>
                                                <li><Link to="/policy/refunds-cancellations"> Cancellation of Profile</Link></li>
                                                <li><Link to="/policy/delete-policy">Delete Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 col-span-12">
                                        <div className="footer-widget">
                                            <h4 className="widget-title cursive text-2xl  font-bold text-primary">Contact Us</h4>
                                            <div className="footer-widget-contact">
                                                <ul className="list-unstyled *:py-2">
                                                    <li>
                                                        <div className='inline-block font-light text-sm'>
                                                            <span className="text-primary font-bold text-lg"> <EnvironmentOutlined />   </span>    {user.address_1} {user.address_2} {user.city} {user.pincode}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='inline-flex items-center gap-1 font-light text-sm'>
                                                            <span className="text-primary font-bold text-lg"><IoIosCall />  </span>    {user.mobile}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='inline-flex gap-1 items-center font-light text-sm'>
                                                            <span className="text-primary font-bold text-lg">  <IoMdMail />  </span>   {user.email}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 border-t border-primary pb-4">
                                <div className="footer-text">
                                    <p className='text-sm pt-5 font-light tracking-widest leading-6'><span className="font-bold text-dark">Disclaimer</span> :
                                        <div className='inline-block *:pb-5  font-light'  ></div>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>
                <div className="tiny-footer bg-primary text-white">
                    <div className="grid grid-cols-12 align-items-center">
                        <div className="col-span-12 mb-0 text-center p-3 text-xs">Copyright © <span id="yearText">{new Date().getFullYear()} </span>
                            <strong>{user.company_name}</strong> Web & App All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer