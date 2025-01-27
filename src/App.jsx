import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AccountLayout from "./pages/Account/AccountLayout";
import Dashboard from "./pages/Account/Dashboard";
import UpdateProfile from "./pages/Account/UpdateProfile";
import FindUsers from "./pages/Account/FindUsers";
import Plans from "./pages/Account/Plans";
import SentProposals from "./pages/Account/SentProposals";
import Contact from "./pages/Contact";
import About from "./pages/About";
import UserChat from "./pages/Account/UserChat";
import AppPolicy from "./pages/Policy";
import Faqs from "./pages/Faq";
import PaymentResponse from "./pages/Payment/PaymentResponse";
import ResetPassword from "./pages/Login/ResetPassword";
import ProfilePage from "./pages/Account/ProfilePage";
import Packages from "./pages/packages";
// import HomeTwo from "./pages/Home/HomeTwo";
import AboutTwo from "./pages/About/AboutTwo";
import SinglePackageOne from "./pages/packages/singlePackage/SinglePackageOne";
import Visa from "./pages/visa";

function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />} >
          {/* <Route index element={<Home />} /> */}
          <Route path="/home/:id" element={<Home />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<AboutTwo />} />
          <Route path="/policy/:url" element={<AppPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<Packages />} />
          <Route path="/packages/show/:id" element={<SinglePackageOne />} />

        </Route>
        <Route path="/" element={<AccountLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<UpdateProfile />} />
          <Route path="/users" element={<FindUsers />} />
          <Route path="/subscriptions" element={<Plans />} />
          <Route path="/proposals/:type" element={<SentProposals />} />
          <Route path="/chat" element={<UserChat />} />
          <Route path="/payment-response/:id" element={<PaymentResponse />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={ThemeRoutes} />
    </>
  )
}

export default App
