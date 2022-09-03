import { Icon } from "@iconify/react";
import classNames from "classnames";

function Indicator({ name, indicators }) {
  return (
    <div className="relative inline-flex border-2 border-slate-200 rounded-sm">
      <div className="absolute fixed right-0 top-0 pr-1">
        <Icon icon="bi:three-dots" className="text-slate-500 text-lg" />
      </div>
      <div className="inline-grid gap-4 p-3 pt-4">
        <div className="text-slate-800">
          {name}
        </div>
        <div className="flex justify-center space-x-4">
          {indicators.map(
            (color) => <span className={classNames("p-1.5 rounded-full", { 'bg-red-600': !!color }, { 'bg-green-600': !color })}></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Indicator;
