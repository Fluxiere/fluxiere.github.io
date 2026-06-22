import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header'; // Matches your NavBar target 
import PageSelect from "./Helpers/PageSelect";
import { Footer } from "./components/Footer/Footer";
import { CustomCursor } from "./components/ProceduralAnimations/CustomCursor/CustomCursor";
import ScrollToTop from "./Helpers/ScrollToTop";
import { PreFooterBanner } from "./components/PreFooterBanner/PreFooterBanner";
import { StackStrip } from "./components/StackStrip/StackStrip";

function App() {
  const baseName = import.meta.env.BASE_URL || "/";
  
  return (
    <BrowserRouter basename={baseName}>
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <PageSelect />
      <PreFooterBanner />
      <StackStrip />
      <Footer />
    </BrowserRouter>
  );
}

export default App;