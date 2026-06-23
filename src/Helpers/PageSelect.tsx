import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/ContactUs/ContactUs";
// import Gallery from "../pages/Insights/Insights";
import ApproachPage from "../pages/Approach/Approach";
import InsightsPage from "../pages/Insights/Insights";

function PageSelect() {
  return (
    <Routes>
      {/* Show Home on initial root entry */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/gallery" element={<Gallery />} />         */}
      <Route path="/insights" element={<InsightsPage />} />        
      <Route path="/approach" element={<ApproachPage />} />

      {/* Fallback configuration: redirect unknown paths back to Home */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default PageSelect;