import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

export default function Place({
	id,
	imageUrl,
	title,
	description,
	address,
	creatorId,
	location,
}: {
	id: string;
	imageUrl: string;
	title: string;
	description: string;
	address: string;
	creatorId: string;
	location: string;
}) {
	const [showMap, setShowMap] = useState(false);

	const openMapHandler = () => setShowMap(true);
	const closeMapHandler = () => setShowMap(false);

	return (
		<>
			<Modal
				headerText={title}
				showMap={showMap}
				onClose={closeMapHandler}
				contentStyles="p-0"
				footerStyles="text-right"
				footer={<Button onClick={closeMapHandler}>Close</Button>}
			>
				<div className="w-full h-60">The map!</div>
			</Modal>

			<li className="mx-0 my-4">
				<Card styles="p-0!">
					<div className="mr-6 w-full h-100">
						<img
							src={imageUrl}
							alt={title}
							className="size-full object-cover"
						/>
					</div>
					<div className="p-4 text-center">
						<h2 className="font-semibold text-2xl">{title}</h2>
						<h3>{address}</h3>
						<p>{description}</p>
					</div>
					<div className="flex *:flex-1 justify-around items-stretch gap-3 p-4 border-[#ccc] border-t">
						<Button onClick={openMapHandler}>View on map</Button>
						<Button type="router">edit</Button>
						<Button>Delete</Button>
					</div>
				</Card>
			</li>
		</>
	);
}
