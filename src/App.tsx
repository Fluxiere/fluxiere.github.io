import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header'; // Matches your NavBar target 
import PageSelect from "./Helpers/PageSelect";
import { Footer } from "./components/Footer/Footer";
import { CustomCursor } from "./components/ProceduralAnimations/CustomCursor/CustomCursor";

function App() {
  const baseName = import.meta.env.BASE_URL || "/";
  
  return (
    <BrowserRouter basename={baseName}>
      <CustomCursor />
      <Header />
      <PageSelect />
      <Footer />
    </BrowserRouter>
  );
}

export default App;