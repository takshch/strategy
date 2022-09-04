import Indicators from '../components/Indicators';
import Layout from '../components/Layout';
import OverallSignals from '../components/OverallSignals';

const INDICATORS = [
  { name: 'EMA Crossover', signals: [1, 0, 0, 1] },
  { name: 'SMA Crossover', signals: [0, 1, 1, 1] },
  { name: 'RSI', signals: [0, 1, 1, 1] },
  { name: 'SuperTrend', signals: [0, 0, 1, 0] },
  { name: 'SuperTrend', signals: [0, 0, 1, 0] },
]

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