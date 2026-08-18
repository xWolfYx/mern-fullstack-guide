import { Link } from "react-router-dom";
import Avatar from "../UI/Avatar";
import Card from "../UI/Card";

export default function User({ user }) {
	return (
		<li className="group m-4 w-[calc(45%-2rem)] min-w-70">
			<Card styles="p-0!">
				<Link
					to={`/user/${user.id}/places`}
					className="flex items-center bg-[#292929] hover:bg-[#ffd900] p-4 w-full text-white transition duration-150"
				>
					<div className="mr-4 size-16">
						<Avatar imgSrc={user.image} imgAlt={user.name} imgWidth={"100%"} />
					</div>
					<div className="m-0 *:group-hover:text-[#292929] *:transition *:duration-150">
						<h2 className="m-0 mb-2 text-[#ffd900] text-2xl">{user.name}</h2>
						<h3 className="m-0 font-semibold">
							{user.places.length} Place{user.places.length > 1 ? "s" : ""}
						</h3>
					</div>
				</Link>
			</Card>
		</li>
	);
}
