import classNames from "classnames";

function Signal({ signal = 0 }) {
  return (
    <span className={classNames("p-1.5 rounded-full", { 'bg-red-600': !!signal }, { 'bg-green-600': !signal })}>
    </span>
  );
}

export default Signal;