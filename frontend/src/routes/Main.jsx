import Indicators from '../components/Indicators';
import Layout from '../components/Layout';
import OverallSignals from '../components/OverallSignals';

const INDICATORS = [
  { id: 1, signals: [1, 0, 0, 1] },
  { id: 2, signals: [0, 1, 1, 1] },
  { id: 3, signals: [0, 1, 1, 1] },
  { id: 4, signals: [0, 0, 1, 0] },
  { id: 5, signals: [0, 0, 1, 0] },
];

function MainRoute() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-6 items-center">
        <div className="inline-flex gap-3">
          <OverallSignals signals={[1, 1, 0, 1]} />
        </div>
        <Indicators indicators={INDICATORS} />
      </div>
    </Layout>
  );
}

export default MainRoute;