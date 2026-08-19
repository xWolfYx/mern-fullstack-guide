import { Link } from "react-router-dom";

export default function Button({
	children,
	styles,
	type,
	onMapOpen,
}: {
	children: React.ReactNode;
	styles?: string;
	type?: "link" | "router";
	onMapOpen?: () => void;
}) {
	const defaultStyle =
		"hover:bg-[#ff0055] py-2 border uppercase hover:scale-110 transition duration-150 cursor-pointer  text-center  hover:text-white   rounded-2xl  border-[#292929] hover:border-transparent";

	if (type === "link")
		return (
			<a href="/" className={`${defaultStyle} hover:bg-sky-600`}>
				{children}
			</a>
		);
	if (type === "router")
		return (
			<Link to="/" className={`${defaultStyle} hover:bg-slate-700`}>
				{children}
			</Link>
		);
	return (
		<button
			type="button"
			className={`${defaultStyle} hover:bg-rose-600`}
			onClick={onMapOpen}
		>
			{children}
		</button>
	);
}
