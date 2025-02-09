import { Link, useLocation } from 'react-router-dom'
// import logo from '../assets/logo.png'
import { useUser } from '../pages/Account/UserContext'
import { UserOutlined } from '@ant-design/icons';
import { CgMenuRight } from 'react-icons/cg';
import { isMobile } from 'react-device-detect';
import React from 'react';
import PropTypes from 'prop-types';
import { Image_URL } from '../utils';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

// import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
const Header = ({classname}) => {
   
    const { user } = useUser();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const location = useLocation();
    React.useEffect(() => {
        setOpen(false);
    }, [location.pathname, isMobile])
    const weblinks = () => (
        <>

            <li>
                <Link to={'/'} >Home</Link>
            </li>
            <li>
                <Link to={'/about/'} >About</Link>
            </li>

            <li>
            <Link to={'/destinations/'} >Destinations</Link>
                {/* <Menu className="hidden">
                    <MenuHandler>
                        <button className='text-primary uppercase'>Packages</button>
                    </MenuHandler>
                    <MenuList className=''>
                        <MenuItem>
                            <Link to={'/packages/' + id}>Domestic</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={'/packages/' + id}>Internationl</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={'/packages/' + id}>Umrah</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={'/packages/' + id}>Study</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={'/packages/' + id}>Religious</Link>
                        </MenuItem>
                    </MenuList>
                </Menu> */}
            </li>
            <li>
                {/* <Link to={'/visa'} >Visa</Link> */}
                <Menu className="hidden">
                    <MenuHandler>
                        <button className='text-primary uppercase'>Visa</button>
                    </MenuHandler>
                    <MenuList className=''>
                        <MenuItem>
                            <Link to={'/visa-assistant/'}>Visa Assistant</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={'/visa-services/'}>Visa Services</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </li>

            {/* <li>
                <Link to={'/faqs'} >Faqs</Link>
            </li> */}
            <li>
                <Link to={'/contact'} >Contact</Link>
            </li>
        </>
    )
    return (
        <>
            <section className={`bg-primary/10 relative ${classname}`}>
                <div className="container relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex relative justify-between items-center">
                                <Link to={'/'} className="w-[120px] py-5 inline-block">
                                    <img src={Image_URL + "assets/images/" + user.logo} className='w-full' alt="" />
                                </Link>
                                <ul className="lg:inline-flex hidden gap-5   navlinks mx-auto">
                                    {weblinks()}
                                </ul>
                                <ul className="hidden relative items-center ms-auto gap-5">
                                    <li>
                                        {
                                            (user?.name) ? (<>
                                                <Link to={'/user/dashboard'} className="lg:bg-primary lg:text-white px-3 py-2 rounded  text-sm  font-light uppercase btn overflow-hidden relative block">
                                                    <span className="inline-block lg:bg-white text-primary leading-8 text-center rounded-full size-8">
                                                        <UserOutlined />
                                                    </span>
                                                    <span className=''>
                                                        {user?.name} {user?.last_name}
                                                    </span>
                                                </Link>
                                            </>) : (<>
                                                <Link to={'/login'} className="lg:bg-primary lg:text-white text-primary px-3 py-2 rounded  lg:text-sm text-xl  font-light uppercase btn overflow-hidden relative block">
                                                    <span className='lg:inline hidden'>Account</span>
                                                    <span className='lg:hidden inline'>
                                                        <UserOutlined />
                                                    </span>
                                                </Link>
                                            </>)
                                        }

                                    </li>
                                    <li >
                                        <button onClick={() => handleOpen()} className='text-primary lg:hidden block text-xl'>
                                            <CgMenuRight />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    open && (
                        <>
                            <div className="relative top-0 w-full bg-primary p-5">
                                <ul className='*:text-white navlinkmobile'>
                                    {weblinks()}
                                </ul>
                            </div>

                        </>
                    )
                }

            </section>

        </>
    )
}

export default Header


Header.propTypes = {
    classname : PropTypes.string
}