import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from "./components/AboutUs";
import Homebanner from './components/Assets/Home banner.png';
import contacusbanner from './components/Assets/contactus banner.png';
import ourclientsbanner from "./components/Assets/img-Banner2.png";
import servicebanner from "./components/Assets/img-Banner3.png";
import CompanyBanner from "./components/CompanyBanner";
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import OurClients from "./components/OurClients";
import OurServices from "./components/OurServices";
import OurVision from "./components/OurVision";
import PrivacyPolicy from './components/PrivacyPolicy';
import QualityPolicy from "./components/QualityPolicy";
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
             <CompanyBanner banner={Homebanner} />
             <WhyChooseUs/>
             <Contactus />
             <VideoGallery/>
              <Gallery />
           <AboutUs />
           <OurVision />
           <QualityPolicy />
            </>
          }
          />


          <Route exact path = "contactus" element={
            <>
             <CompanyBanner banner={contacusbanner} />
             <Contactus />
             <Form/>
             </>
          }
          />
           
             
        

        <Route exact path = "Ourservices" element={
          <>
           <CompanyBanner banner={servicebanner} />
         <OurServices/>
         </>
        }
        />



        <Route exact path = "/OurClients" element={
          <>
          <CompanyBanner banner={ourclientsbanner} />
          <Contactus />
          <OurClients/>
          </>
        }/>


       <Route exact path = "/Gallery" element={
          <>
         <VideoGallery/>
          <Contactus />
          <Gallery/>
          </>
        }/>
       <Route exact path="/privacypolicy" element = {
        <>
        <PrivacyPolicy/>
        <TermsAndConditions/>
        </>
       }/>

        
      </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App;
