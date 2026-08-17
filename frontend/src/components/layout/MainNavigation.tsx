import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

export default function MainNavigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	return (
		<>
			<MainHeader>
				<button
					type="button"
					className="md:hidden *:block flex flex-col justify-around bg-transparent *:bg-white mr-8 border-none *:w-12 *:h-[2.5px] size-12 cursor-pointer"
					onClick={openDrawer}
				>
					<span />
					<span />
					<span />
				</button>
				<Link to="/" className="text-white">
					<h1>Triply</h1>
				</Link>
				<nav className="hidden md:flex">
					<NavLinks />
				</nav>
			</MainHeader>
			<AnimatePresence>
				{isDrawerOpen && (
					<>
						<SideDrawer>
							<nav className="h-full">
								<NavLinks />
							</nav>
						</SideDrawer>
						<Backdrop onCloseDrawer={closeDrawer} />
					</>
				)}
			</AnimatePresence>
		</>
	);
}
