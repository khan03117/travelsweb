import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { UserProvider, useUser } from '../pages/Account/UserContext'
import { ToastContainer } from 'react-toastify'
import Loading from '../components/Loading'
import FooterWhite from './FooterWhite'


const Layout = () => {
  const { pathname } = useLocation();
  const { user, theme, loading } = useUser();
  console.log(user);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (!user || loading) {
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
          <FooterWhite />
          <Footer />
        </main>
      </UserProvider>
    </>
  )
}

export default Layout