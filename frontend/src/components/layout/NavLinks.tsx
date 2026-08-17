import { NavLink } from "react-router-dom";

const links: { to: string; label: string }[] = [
	{ to: "/", label: "All users" },
	{ to: "/places", label: "My places" },
	{ to: "/add", label: "Add place" },
	{ to: "/auth", label: "Authenticate" },
];

export default function NavLinks() {
	return (
		<ul className="flex md:flex-row flex-col justify-center items-center gap-2 m-0 p-0 size-full">
			{links.map(({ to, label }) => (
				<li key={label} className="m-4 md:mx-2 md:my-0">
					<NavLink
						to={to}
						className={({ isActive }) =>
							`hover:bg-[#f8df00] hover:text-[#292929] p-2 border hover:border-[#292929] text-[#292929] uppercase transition duration-150 ${
								isActive
									? "bg-[#ffd900] border-[#292929] md:text-[#292929]"
									: "md:text-white border-transparent"
							}`
						}
					>
						{label}
					</NavLink>
				</li>
			))}
		</ul>
	);
}
