import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { UserProvider, useUser } from '../pages/Account/UserContext'
import { ToastContainer } from 'react-toastify'
import Loading from '../components/Loading'
import { v4 as uuidv4 } from 'uuid';

const Layout = () => {
  const { pathname } = useLocation();
  const { user, theme } = useUser();
  const setAppid = () => {
    const appid = uuidv4();
    const isApp = localStorage.getItem('appId');
    if (!isApp) {
      localStorage.setItem('appId', appid);
    }
  }
  React.useEffect(() => {
    setAppid();
  }, []);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (!user) {
    return (
      <>
        <Loading className="min-h-lvh h-full" />
      </>
    )
  }
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


          <Header classname={``} />
          <Outlet />
          <Footer />
        </main>
      </UserProvider>
    </>
  )
}

export default Layout