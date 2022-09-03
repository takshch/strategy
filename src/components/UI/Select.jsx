function Select({ options = [], onChange, selected }) {
  return (
    <select
      className="inline border border-slate-400 rounded-sm bg-white py-1 px-2 text-sm text-gray-800"
      value={selected}
      onChange={(e) => onChange(e)}
    >
      {options.map(
        ({ id, text }, index) => <option key={index} value={id}>{text}</option>
      )}
    </select>
  );
}

export default Select;