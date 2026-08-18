import users from "../../../data/usersData";
import Card from "../../UI/Card";
import Place from "./Place";

export default function PlaceList({ userId }) {
	const user = users.find((u) => u.id === userId);
	const { places } = user;

	return places.length === 0 ? (
		<div className="mx-auto my-4 p-0 w-9/10 max-w-160">
			<Card>
				<h2>No places found. Maybe create one?</h2>
				<button type="button">Share Place</button>
			</Card>
		</div>
	) : (
		<ul className="mx-auto my-4 p-0 w-9/10 max-w-160">
			{places.map((p) => (
				<Place
					key={p.id}
					id={p.id}
					imageUrl={p.imageUrl}
					title={p.title}
					description={p.description}
					address={p.address}
					creatorId={p.creatorId}
					location={p.location}
				/>
			))}
		</ul>
	);
}
