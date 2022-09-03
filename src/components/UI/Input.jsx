import classNames from "classnames";

function Input({ className, ...props }) {
  return (
    <input
      className={classNames("border border-gray-400 rounded-sm p-1", className)}
      {...props}
    />
  );
}

export default Input;