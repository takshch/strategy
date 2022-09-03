import Signal from "./Signal";

const HEADING = [
  'Buy Entry',
  'Buy Exit',
  'Sell Entry',
  'Sell Exit'
];

function OverallSignals({ signals }) {
  return (
    <div className="inline-flex gap-x-3">
      {signals.map((signal, index) =>
        <span className="flex items-center gap-x-1 text-xs">
          <Signal key={index} signal={signal} />
          <span className="text-xs">
            {HEADING[index]}
          </span>
        </span>
      )}
    </div>
  );
}

export default OverallSignals;