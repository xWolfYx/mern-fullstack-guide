import { NavLink } from "react-router-dom";

export default function NavLinks() {
	// !TODO: needs styling
	return (
		<ul>
			<li>
				<NavLink to="/">All users</NavLink>
			</li>
			<li>
				<NavLink to="/">My places</NavLink>
			</li>
			<li>
				<NavLink to="/">Add place</NavLink>
			</li>
			<li>
				<NavLink to="/">Authenticate</NavLink>
			</li>
		</ul>
	);
}
