import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from "./components/AboutUs";
import ServicesList from './components/AllServices';
import BathroomCleaningService from './components/Bathroom';
import BlogsList from './components/BlogsList';
import CarpenterService from './components/Carpenter';
import CompanyBanner from "./components/CompanyBanner";
import Contactus from './components/Contactus';
import DeepCleaning from './components/DeepCleaning';
import ElectricianService from './components/Electrician';
import GlassFacadeCleaning from './components/FascadeCleaning';
import Footer from './components/Footer';
import Form from './components/Form';
import FullHomeMoveInService from './components/FullHomeMoveIn';
import Gallery from './components/Gallery';
import GoogleReviews from './components/GoogleReviews';
import GraniteFloorPolishing from './components/Granite-Floor';
import FloorGrindingMaintenance from './components/Grinding-crystallisation-maintenance';
import HighPresuure from './components/HighPressure';
import HomeBanner from './components/HomeBanner';
import Housekeeping from './components/HouseKeeping';
import ItalianMarblePolishing from './components/Italian-Marble';
import KotaStonePolishing from './components/Kota-Stone';
import MarblePolishing from './components/MarblePolishing';
import MarblePolishingDelhi from './components/MarblePolishing-Delhi';
import logo from './components/Nav-logo.png';
import Navbar from './components/Navbar';
import OfficeMaintenance from './components/OfficeMaintenance';
import OurClients from "./components/OurClients";
import OurServices from "./components/OurServices";
import OurVision from "./components/OurVision";
import PestControlService from './components/PestControl';
import PlumberService from './components/Plumber';
import PrivacyPolicy from './components/PrivacyPolicy';
import QualityPolicy from "./components/QualityPolicy";
import RatesTable from './components/RatesTable';
import ScrollToTop from './components/ScroolToTop';
import SingleBlog from './components/SingleBlog';
import SofaCarpet from './components/SofaCarpet';
import SwimmingPool from './components/SwimmingPool';
import TermsAndConditions from './components/TermsAndConditions';
import TilesCleaningService from './components/Tiles';
import VideoGallery from './components/VideoGallery';
import WhyChooseUs from './components/WhyChooseUs';
import WoodenFloorPolishing from './components/WoodenFoor';


function App() {
  return (
    <>
    <ScrollToTop/>
      
        <Navbar/>
        
       
       
        
        <Routes>
          <Route exact path="/" element={
            <>
            <HomeBanner/>
             {/* <CompanyBanner banner={logo} /> */}
             <WhyChooseUs/>
             <Contactus />
             <ServicesList/>
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
             <ServicesList/>
             
             </>
          }
          />
           
             
        

        <Route exact path = "/Ourservices" element={
          <>
          {/* <HomeBanner/> */}
           {/* <CompanyBanner banner={logo} /> */}
         <OurServices/>
         <Contactus/>
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

       <Route exact path='/services/Marble-polishing' element={
        <>
        <MarblePolishing/>
        <Contactus/>
        
        </>
       }/>


       <Route exact path='/services/kota-stone-polishing' element={
        <>
        <KotaStonePolishing/>
        <Contactus/>
        
        </>
       }/>


       <Route exact path='/services/italian-marble-polishing' element={
        <>
        <ItalianMarblePolishing/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/granite-floor-polishing' element={
        <>
        <GraniteFloorPolishing/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/floor-grinding-maintenance-crystallization' element={
        <>
        <FloorGrindingMaintenance/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/HouseKeeping' element={
        <>
        <Housekeeping/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/sofa-carpet-cleaning' element={
        <>
        <SofaCarpet/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/pool-cleaning' element={
        <>
        <SwimmingPool/>
        <Contactus/>
        
        </>
       }/>

        <Route exact path='/services/deep-cleaning' element={
        <>
        <DeepCleaning/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/High-pressure-cleaning' element={
        <>
        <HighPresuure/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/office-maintenance' element={
        <>
        <OfficeMaintenance/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/glass-and-fascade-cleaning' element={
        <>
        <GlassFacadeCleaning/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/glass-and-fascade-cleaning' element={
        <>
        <GlassFacadeCleaning/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/carpenter' element={
        <>
        <CarpenterService/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/electrician' element={
        <>
        <ElectricianService/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/pest-control' element={
        <>
        <PestControlService/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/full-home-move-in-cleaning' element={
        <>
        <FullHomeMoveInService/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/Bathroom-cleaning' element={
        <>
        <BathroomCleaningService/>
        <Contactus/>
        
        </>
       }/>
       <Route exact path='/services/tiles-cleaning' element={
        <>
        <TilesCleaningService/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/wooden-floor-cleaning' element={
        <>
        <WoodenFloorPolishing/>
        <Contactus/>
        
        </>
       }/>
       <Route exact path='/services/marble-polishing-delhi' element={
        <>
        <MarblePolishingDelhi/>
        <Contactus/>
        
        </>
       }/>

       <Route exact path='/services/plumber' element={
        <>
        <PlumberService/>
        <Contactus/>
        
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
      

    </>
  )
}

export default App;
