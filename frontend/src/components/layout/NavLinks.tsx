import { NavLink } from "react-router-dom";

export default function NavLinks() {
	// !TODO: needs styling

	const getActiveClass = ({ isActive }) => (isActive ? "bg-[#ffd900]" : "");

	return (
		<ul className="flex items-center gap-2">
			<li>
				<NavLink to="/" className={getActiveClass}>
					All users
				</NavLink>
			</li>
			<li>
				<NavLink to="/places" className={getActiveClass}>
					My places
				</NavLink>
			</li>
			<li>
				<NavLink to="/add" className={getActiveClass}>
					Add place
				</NavLink>
			</li>
			<li>
				<NavLink to="/auth" className={getActiveClass}>
					Authenticate
				</NavLink>
			</li>
		</ul>
	);
}
