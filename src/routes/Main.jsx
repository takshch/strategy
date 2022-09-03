import Indicators from '../components/Indicators';
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
    <div className="w-screen h-screen flex flex-col gap-y-6 py-3 px-2 bg-zinc-50">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="inline-flex gap-3">
          <OverallSignals signals={[1, 1, 0, 1]} />
        </div>
        <Indicators indicators={INDICATORS} />
      </div>
    </div>
  );
}

export default MainRoute;