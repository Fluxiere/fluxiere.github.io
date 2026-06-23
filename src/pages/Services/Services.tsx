import { DetailedServices } from '../../components/ServiceDetailList/ServiceDetailList';
import { ApproachComponent } from '../../components/ApproachComponent/ApproachComponent';
const Services = () => {
  return (
    <main style={{ marginTop: '68px' }}>
      <ApproachComponent />
      <DetailedServices />
    </main>
  );
};

export default Services;