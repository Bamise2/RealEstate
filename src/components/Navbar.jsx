import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
	const [active, setActive] = useState(false)

  return (
    <nav className="flex justify-between h-[100px]">
      <div className="flex basis-3/5 items-center text-xl gap-12">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <img src="/logo.png" alt="Logo image" className="w-10 h-10" />
          <p className="inline-block md:hidden xl:inline-block">NodeEstate</p>
        </Link>
        <div className="hidden md:flex gap-5">
          <Link
            to="/"
            className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold"
          >
            About{" "}
          </Link>
          <Link
            to="/contact"
            className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/agents"
            className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold"
          >
            Agents
          </Link>
        </div>
      </div>
      <div className="flex basis-2/5  items-center justify-end md:bg-[#fcf5f3] bg-transparent">
        <Link
          to="/signin"
          className="hidden md:inline-block m-5 py-3 px-6 rounded-lg"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="hidden md:inline-block bg-amber-300 py-3 px-6 rounded-lg font-semibold m-5"
        >
          Sign Up
        </Link>


        {/* Mobile Menu  */}
        <button onClick={()=>setActive(prev=>!prev)} className="relative flex items-center justify-center bg-black w-14 h-14 rounded-full cursor-pointer z-30 mr-4 md:hidden">
          <span className={`bg-white h-1 w-10 absolute top-1/2  left-1/2 rounded transition duration-700 ease-in-out transform ${active ? " -translate-x-1/2 -translate-y-1/2 rotate-45" : "-translate-x-1/2 -translate-y-[10px] rotate-0"}`}></span>
          <span className={`bg-white h-1 w-10 absolute top-1/2 left-1/2 rounded transition duration-700 ease-in-out transform -translate-x-1/2  ${active ? "opacity-0" : " opacity-100"}`}></span>
          <span className={`bg-white h-1 w-10 absolute top-1/2 left-1/2 rounded transition duration-700 ease-in-out transform  ${active ? "-translate-x-1/2 -translate-y-1/2 -rotate-45" : "-translate-x-1/2 translate-y-[10px] rotate-0"}`}></span>

        </button>
        <div onClick={()=>setActive(prev=>!prev)} className={`flex h-dvh bg-black fixed top-0 right-0  w-[50%] items-center  justify-center transition duration-500 ease-in-out transform  ${active ? "translate-x-0 ": "translate-x-full"} md:hidden`}>
          <div className="grid gap-10 text-2xl text-white text-center	">
            <Link to="/" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">Home</Link>
            <Link to="/about" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">About</Link>
            <Link to="/contact" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">Contact</Link>
            <Link to="/agents" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">Agents</Link>
            <Link to="/signin" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">Sign In</Link>
            <Link to="/signup" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
