import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full py-3 px-2 bg-zinc-50">
        {children}
      </div>
    </div>
  );
}

export default Layout;