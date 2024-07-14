

import ContactUsPage from "./Components/ContactUs";
import DescriptionCard from "./Components/Faq";
import Home from "./Components/Home"
import NavAbout from "./Components/NavAbout";
import NavProduct from "./Components/NavProduct";
import NavSer from "./Components/NavSer"
import Navbar from "./Components/Navbar"



import { Route, Routes } from 'react-router-dom';



function App() {


  return (
    <>
     <Navbar />
     

  
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<NavSer />} />
      <Route path="about" element={<NavAbout />} />
      <Route path="product" element={<NavProduct />} />
      <Route path="contactUs" element={<ContactUsPage />} />
      <Route path="faq" element={<DescriptionCard/>} />




    </Routes>
  
    
    </>
  )
}

export default App
