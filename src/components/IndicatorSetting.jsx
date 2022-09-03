import Input from "./UI/Input";
import Select from "./UI/Select";

import { OPTIONS, SETTINGS, DEFAULT_SETTINGS } from '../constants/indicators';
import { Icon } from "@iconify/react";

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

function IndicatorSetting({ id, setting, setSetting, deleteSetting }) {
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
    <div className="relative flex flex-col justify-center gap-4 bg-zinc-100 p-3 rounded-sm">
      <div className="absolute top-0 right-0 pr-1 pt-1 cursor-pointer text-sm" onClick={() => deleteSetting(id)}>
        <Icon icon="ant-design:delete-filled" color="red" />
      </div>
      <div className="flex justify-center">
        <Select options={OPTIONS} selected={indicator} onChange={onIndicatorChange} />
      </div>
      <IndicatorFields indicatorId={indicator} onChange={onSettingsChange} values={parameters} />
    </div>
  );
}

export default IndicatorSetting;