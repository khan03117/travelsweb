import React, { useState } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { UserProvider, useUser } from '../pages/Account/UserContext'
import { ToastContainer } from 'react-toastify'
import Loading from '../components/Loading'
import FooterWhite from './FooterWhite'
import { Helmet } from 'react-helmet-async'


const Layout = () => {
  const { pathname } = useLocation();

  const { user, theme, loading, seos } = useUser();
  const [path, setPath] = useState('');
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setPath(['home', 'about', 'contact'].includes(pathname.replace(/^\/+|\/+$/g, "")) ? pathname.replace(/^\/+|\/+$/g, "") : "home");
  }, [pathname]);
  const faviconUrl = seos?.find(item => item.col_head === "favicon_url")?.col_value;
  if (!user || loading) {
    return (
      <>
        <Loading className="min-h-lvh h-full" />
      </>
    )
  }
  return (
    <>
      <Helmet>
        {seos.find(obj => obj.col_head == "main_title")?.col_value && <title>{seos.find(obj => obj.col_head == "main_title")?.col_value}</title>}
        {
          seos.filter(obj => obj.path_name == path).map(itm => {
            const key = itm.col_head;
            const value = itm.col_value;
            if (key === "meta_title") return null; // already handled above
            const isPropertyTag = key.startsWith("og:") || key.startsWith("twitter:");
            return isPropertyTag ? (
              <meta property={key} content={value} key={key} />
            ) : (
              <meta name={key.replace("meta_", "")} content={value} key={key} />
            );
          })
        }
        {faviconUrl && (
          <>
            <link rel="icon" type="image/x-icon" href={faviconUrl} />
            <link rel="apple-touch-icon" href={faviconUrl} />
          </>
        )}
      </Helmet>
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