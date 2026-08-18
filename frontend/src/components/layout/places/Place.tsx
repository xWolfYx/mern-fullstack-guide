import Card from "../../UI/Card";

export default function Place({
	id,
	imageUrl,
	title,
	description,
	address,
	creatorId,
	location,
}) {
	return (
		<li className="mx-0 my-4">
			<Card styles="p-0!">
				<div className="mr-6 w-full h-100">
					<img src={imageUrl} alt={title} className="size-full object-cover" />
				</div>
				<div className="p-4 text-center">
					<h2 className="font-semibold text-2xl">{title}</h2>
					<h3>{address}</h3>
					<p>{description}</p>
				</div>
				<div className="flex justify-center gap-3 *:hover:bg-[#ff0055] p-4 *:py-2 *:border border-[#ccc] *:border-[#292929] *:hover:border-transparent border-t *:rounded-2xl *:w-100/3 *:hover:text-white text-center *:uppercase *:hover:scale-110 *:transition *:duration-150 *:cursor-pointer">
					<button type="button">View on map</button>
					<button type="button">Edit</button>
					<button type="button">Delete</button>
				</div>
			</Card>
		</li>
	);
}
