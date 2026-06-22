import { Hero } from '../../components/Hero/Hero';
import { TrustStrip } from '../../components/TrustStrip/TrustStrip';
import { StackStrip } from '../../components/StackStrip/StackStrip';
// import { Results } from '../../components/Results/Results';

const Home = () => {
  return (
    <main style={{ marginTop: '68px' }}>
      <Hero />
      <TrustStrip />
      <StackStrip />
      {/* <Results /> */}
    </main>
  );
};

export default Home;