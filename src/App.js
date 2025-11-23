import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from "./components/AboutUs";
import BlogsList from './components/BlogsList';
import CompanyBanner from "./components/CompanyBanner";
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Form from './components/Form';
import Gallery from './components/Gallery';
import GoogleReviews from './components/GoogleReviews';
import HomeBanner from './components/HomeBanner';
import logo from './components/Nav-logo.png';
import Navbar from './components/Navbar';
import OurClients from "./components/OurClients";
import OurServices from "./components/OurServices";
import OurVision from "./components/OurVision";
import PrivacyPolicy from './components/PrivacyPolicy';
import QualityPolicy from "./components/QualityPolicy";
import RatesTable from './components/RatesTable';
import SingleBlog from './components/SingleBlog';
import TermsAndConditions from './components/TermsAndConditions';
import VideoGallery from './components/VideoGallery';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
       
       
        
        <Routes>
          <Route exact path="/" element={
            <>
            <HomeBanner/>
             {/* <CompanyBanner banner={logo} /> */}
             <WhyChooseUs/>
             <Contactus />
             <RatesTable/>
            <VideoGallery/>
              <Gallery />
              <BlogsList/>
           <AboutUs />
           <OurVision />
           <QualityPolicy />
           <GoogleReviews/>
            </>
          }
          />


          <Route exact path = "/contactus" element={
            <>
            {/* <HomeBanner/> */}
             {/* <CompanyBanner banner={logo} /> */}
             
             <Form/>
             
             </>
          }
          />
           
             
        

        <Route exact path = "/Ourservices" element={
          <>
          {/* <HomeBanner/> */}
           {/* <CompanyBanner banner={logo} /> */}
         <OurServices/>
         </>
        }
        />



        <Route exact path = "/OurClients" element={
          <>
          {/* <HomeBanner/> */}
          <CompanyBanner banner={logo} />
          <Contactus />
          <OurClients/>
          </>
        }/>


       <Route exact path = "/Gallery" element={
          <>
          {/* <HomeBanner/> */}
         <VideoGallery/>
          <Contactus />
          {/* <Gallery/> */}
          <Gallery/>
          </>
        }/>
       <Route exact path="/privacypolicy" element = {
        <>
        {/* <HomeBanner/> */}
        <PrivacyPolicy/>
        <TermsAndConditions/>
        </>
       }/>

       <Route exact path='/blogs' element={
        <>
        {/* <MarblePolishingBlog/> */}
        <BlogsList/>
        
        </>
       }/>

       <Route exact path='/blogs/get/:slug' element={
        <>
       
        <SingleBlog/>
        </>
       }/>


       

        
      </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App;
