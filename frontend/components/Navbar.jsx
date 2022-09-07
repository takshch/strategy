import Link from 'next/link';

function Navbar() {
  return (
    <div className="border-b border-slate-100 bg-white">
      <nav className="flex gap-7 mx-4 my-2 text-sm">
        <Link href="/">
          <a>Main</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
        <Link href="/logs">
          <a>Logs</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;