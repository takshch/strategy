import classNames from "classnames";

const STYLES = {
  'blue': 'bg-sky-500 text-white',
  'green': 'bg-green-600 text-white',
  'white': 'bg-white text-black'
}

const SIZES = {
  'small': 'text-sm',
  'xtrasmall': 'text-xs',
};

function Button({ children, text, color = 'blue', size = 'small', className, ...props }) {
  return (
    <button
      className={classNames("border-0 py-1 px-4 rounded-sm font-medium", SIZES[size], STYLES[color], className)}
      {...props}
    >
      {children ? children : text}
    </button>
  );
}

export default Button;