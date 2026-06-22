import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TrustStrip } from './components/TrustStrip/TrustStrip';
import { Services } from './components/Services/Services';
import { StackStrip } from './components/StackStrip/StackStrip';
import { Process } from './components/Process/Process';
import { Results } from './components/Results/Results';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Insights } from './components/Insights/Insights';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '68px' }}> {/* Prevents fixed navbar from clipping hero top elements */}
        <Hero />
        <TrustStrip />
        <Services />
        <StackStrip />
        <Process />
        <Results />
        <CallToAction />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;