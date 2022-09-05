import { Icon } from "@iconify/react";
import Popup from "reactjs-popup";
import Button from "../Button";

function ModalConfirm({ children, text }) {
  return (
    <Popup
      trigger={children}
      position="top center"
      modal
    >
      {close => (
        <div className="bg-white flex flex-col justify-between rounded-sm w-96 h-32">
          <div className="absolute top-0 right-0 pr-1.5 pt-1.5 cursor-pointer text-3xl" onClick={() => close()}>
            <Icon icon="clarity:window-close-line" color="grey" />
          </div>
          <div className="text-lg mb-auto pt-2 pb-3 px-4">
            {text}
          </div>
          <div className="flex gap-3 border-t border-gray-200 pt-2 pb-2 px-4">
            <Button text="Confirm" color="green" onClick={() => close()} />
            <Button text="Cancel" color="white" onClick={() => close()} />
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ModalConfirm;