import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex justify-between h-[100px]">
			<div className="flex basis-3/5 items-center text-xl gap-12">
				<Link to="/" className="flex items-center gap-2 font-bold text-2xl">
					<img src="/logo.png" alt="Logo image" className="w-5 h-5" />
					NodeEstate
				</Link>
				<div className="flex gap-5">
					<Link to="/" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">
						Home
					</Link>
					<Link to="/about" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">
						About{" "}
					</Link>
					<Link to="/contact" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">
						Contact
					</Link>
					<Link to="/agents" className="transition duration-700 ease-in-out hover:scale-105 hover:font-semibold">
						Agents
					</Link>
				</div>
			</div>
			<div className="flex basis-2/5 gap-6 items-center justify-end bg-[#fcf5f3]">
				<Link to="/signin" className="m-5 py-3 px-6 rounded-lg">
					Sign In
				</Link>
				<Link
					to="/signup"
					className="bg-amber-300 py-3 px-6 rounded-lg font-semibold m-5"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}
