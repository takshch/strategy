import { Icon } from "@iconify/react";
import { INDICATORS_NAME, PARAMETERS } from "../constants/indicators";
import Signal from "./Signal";
import Input from "./UI/Input";
import ModalForm from "./UI/Model/Form";

function Indicator({ id, signals }) {
  const name = INDICATORS_NAME[id];
  const parameters = PARAMETERS[id];

  return (
    <div className="relative inline-grid gap-y-6 p-3 pt-4 bg-white border border-slate-200 rounded-sm">
      <ModalForm heading={`${name}`} btnText="Save">
        {() => ({
          trigger: (<div className="absolute fixed right-0 top-0 pr-1 cursor-pointer">
            <Icon icon="bi:three-dots" className="text-slate-500 text-lg" />
          </div>),
          form: (<div className="flex flex-col gap-3">
            {parameters.map(({ label }, index) =>
              <div key={`${id}-parameter-${index}`} className="inline-flex items-center gap-2">
                <span className="capitalize text-xs">{label}</span>
                <Input
                  type="number"
                  // onChange={(e) => onChange(label, e)}
                  className="text-xs"
                  // value={}
                />
              </div>
            )}
          </div>)
        })}
      </ModalForm>
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
