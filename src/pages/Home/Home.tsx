import { Hero } from '../../components/Hero/Hero';
import { TrustStrip } from '../../components/TrustStrip/TrustStrip';
import { StackStrip } from '../../components/StackStrip/StackStrip';
import Services from '../Services/Services';
// import { Results } from '../../components/Results/Results';

const Home = () => {
  return (
    <main style={{ marginTop: '68px' }}>
      <Hero />
      <Services />
      <TrustStrip />
      <StackStrip />
      {/* <Results /> */}
    </main>
  );
};

export default Home;