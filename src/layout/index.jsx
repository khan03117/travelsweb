import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { UserProvider, useUser } from '../pages/Account/UserContext'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
    const { pathname } = useLocation();
    const { theme } = useUser();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <>
            <UserProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <main style={{ "--primary": theme.primary, "--secondary": theme.secondary }}>

              
                <Header classname={''} />
                <Outlet />
                <Footer />
                </main>
            </UserProvider>
        </>
    )
}

export default Layout