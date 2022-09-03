import Indicator from "./Indicator";

function Indicators({ indicators }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {indicators.map(({ name, signals }, index) =>
        <Indicator key={index} name={name} signals={signals} />
      )}
    </div>
  );
}

export default Indicators;