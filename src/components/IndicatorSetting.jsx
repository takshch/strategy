import Input from "./UI/Input";
import Select from "./UI/Select";

import { OPTIONS, SETTINGS, DEFAULT_SETTINGS } from '../constants/indicators';

const IndicatorFields = ({ indicatorId, onChange, values }) => {
  const fields = SETTINGS[indicatorId];

  return (
    <div className="flex justify-center gap-4 text-sm">
      {fields.map(({ label }, index) =>
        <div key={`indicator-${indicatorId}-${index}`} className="inline-flex items-center gap-2">
          <span className="capitalize text-xs">{label}</span>
          <Input
            type="number"
            onChange={(e) => onChange(label, e)}
            className="text-xs"
            value={values[label]}
          />
        </div>
      )}
    </div>
  );
};

function IndicatorSetting({ id, setting, setSetting }) {
  const { indicator, parameters = {} } = setting;

  const onIndicatorChange = (e) => {
    const indicator = Number(e.target.value);
    setSetting({ id, indicator, parameters: DEFAULT_SETTINGS[indicator] });
  };

  const onSettingsChange = (label, e) => {
    const value = Number(e.target.value);
    const tempParameters = { ...parameters, [label]: value };
    setSetting({ id, indicator, parameters: tempParameters });
  };

  return (
    <div className="flex flex-col justify-center gap-4 bg-zinc-100 p-3 rounded-sm">
      <Select options={OPTIONS} selected={indicator} onChange={onIndicatorChange} />
      <IndicatorFields indicatorId={indicator} onChange={onSettingsChange} values={parameters} />
    </div>
  );
}

export default IndicatorSetting;