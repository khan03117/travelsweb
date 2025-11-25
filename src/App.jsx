import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

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
// import AboutTwo from "./pages/About/AboutTwo";
import SinglePackageOne from "./pages/packages/singlePackage/SinglePackageOne";
import Visa from "./pages/visa";
import Destinations from "./pages/destinations";
import VisaAssistantPage from "./pages/visa/VisaAssistantPage";
import VisaAssistantDetailsPage from "./pages/visa/VisaAssistantDetailsPage";
import VisaServices from "./pages/visa/VisaServices";
import OkayBoard from "./pages/visa/OkayBoard";
import ApplyNow from "./pages/Contact/ApplyNow";
import CategoryPackage from "./pages/packages/CategoryPackage";
import HotelLists from "./pages/hotel/HotelLists";
import SingleHotel from "./pages/hotel/SingleHotel";
import SearchFlightsRes from "./pages/flight/pages/SearchFlightResult/SearchFlightsRes";
import Review from "./pages/flight/pages/Review";
import AddPassengerDetails from "./pages/flight/pages/Review/AddPassengerDetails";
import SearchHotel from "./pages/hotel/SearchHotel";
import FlightHome from "./pages/flight/pages/Home";
import Ticket from "./pages/flight/ticket/Ticket";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy/:url" element={<AppPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/visa/:slug" element={<VisaServices />} />
          <Route path="/addon/:slug" element={<OkayBoard />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:url" element={<Packages />} />
          <Route path="/category-packages/:url" element={<CategoryPackage />} />
          <Route path="/package/show/:url" element={<SinglePackageOne />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/visa-assistant" element={<VisaAssistantPage />} />
          <Route path="/visa-assistant/:url" element={<VisaAssistantDetailsPage />} />


          <Route path='/flight' element={<FlightHome />} />
          <Route path='/hotel-list/:id' element={<HotelLists />} />
          <Route path='/single-list' element={<SingleHotel />} />
          <Route path='/search-flight' element={<SearchFlightsRes />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='passenger-details/:id' element={<AddPassengerDetails />} />



          <Route path='/hotel' element={<SearchHotel />} />
          <Route path='ticket/:order_id?' element={<Ticket />} />
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
