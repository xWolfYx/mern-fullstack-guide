import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

export default function MainNavigation() {
	return (
		<MainHeader>
			<button
				type="button"
				className="md:hidden *:block flex flex-col justify-around bg-transparent *:bg-white mr-8 border-none *:w-12 *:h-[2.5px] size-12 cursor-pointer"
			>
				<span />
				<span />
				<span />
			</button>
			<Link to="/" className="text-white">
				<h1>Triply</h1>
			</Link>
			<nav>
				<NavLinks />
			</nav>
		</MainHeader>
	);
}
