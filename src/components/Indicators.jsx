import Indicator from "./Indicator";

function Indicators({ indicators }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {indicators.map(({ id, name, signals }, index) =>
        <Indicator key={index} id={id} name={name} signals={signals} />
      )}
    </div>
  );
}

export default Indicators;