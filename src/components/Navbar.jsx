import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b border-slate-100 bg-white">
      <nav className="flex gap-7 mx-4 my-2 text-sm">
        <Link to="/">Main</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logs">Logs</Link>
      </nav>
    </div>
  );
}

export default Navbar;