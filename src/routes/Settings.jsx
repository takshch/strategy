import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useReducer } from "react";
import IndicatorSetting from "../components/IndicatorSetting";
import Button from "../components/UI/Button";
import { DEFAULT_SETTINGS } from "../constants/indicators";

const ACTION_TYPES = {
  ADD: 'ADD',
  SAVE: 'SAVE',
};

const DEFAULT_INDICATOR_SETTING = { indicator: 1, parameters: DEFAULT_SETTINGS[1] };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      const newState = [...state];
      newState.push(DEFAULT_INDICATOR_SETTING);
      return newState;
    case ACTION_TYPES.SAVE:
      const { id, indicator, parameters } = action.payload;
      const settings = state[id];
      state[id] = { ...settings, indicator, parameters };
      return [...state];
    default:
      return state;
  }
};

function SettingsRoute() {
  const [settings, dispatch] = useReducer(reducer, [DEFAULT_INDICATOR_SETTING]);

  const addIndicator = () => {
    dispatch({ type: ACTION_TYPES.ADD });
  };

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  const setSetting = (payload) => {
    dispatch({ type: ACTION_TYPES.SAVE, payload });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-y-6 py-3 px-2 bg-zinc-50">
      <div className="flex">
        <Button
          onClick={() => addIndicator()}
          className="flex gap-2 items-center"
        >
          <Icon icon="ant-design:plus-outlined" className="text-base" />
          Add
        </Button>
      </div>
      <div className="flex flex-col gap-10">
        {settings.map((setting, index) =>
          <IndicatorSetting
            key={`indicator-setting-${index}`}
            id={index}
            setting={setting}
            setSetting={setSetting}
          />
        )}
      </div>
    </div>
  );
}

export default SettingsRoute;