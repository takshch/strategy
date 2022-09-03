import { Icon } from "@iconify/react";
import Signal from "./Signal";

function Indicator({ name, signals }) {
  return (
    <div className="relative inline-grid gap-y-6 p-3 pt-4 bg-white border border-slate-200 rounded-sm">
      <div className="absolute fixed right-0 top-0 pr-1">
        <Icon icon="bi:three-dots" className="text-slate-500 text-lg" />
      </div>
      <div className="text-slate-800 text-center">
        {name}
      </div>
      <div className="flex justify-center space-x-4">
        {signals.map((signal, index) =>
          <Signal key={index} signal={signal} />
        )}
      </div>
    </div>
  );
}

export default Indicator;
