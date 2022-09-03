import classNames from "classnames";

const styles = {
  'blue': 'bg-sky-500 text-white',
  'green': 'bg-green-600 text-white',
  'white': 'bg-white text-black'
}

function Button({ children, text, color = 'blue', className, ...props }) {
  return (
    <button
      className={classNames("border-0 py-1 px-4 rounded-sm text-sm font-medium", styles[color], className)}
      {...props}
    >
      {children ? children : text}
    </button>
  );
}

export default Button;