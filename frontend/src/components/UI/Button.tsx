import { Link } from "react-router-dom";

export default function Button({
	children,
	styles,
	type,
	onClick,
}: {
	children: React.ReactNode;
	styles?: string;
	type?: "link" | "router";
	onClick?: () => void;
}) {
	const defaultStyle =
		"hover:bg-[#ff0055] px-4 py-2 border border-[#292929] hover:border-transparent rounded-2xl hover:text-white text-center uppercase hover:scale-110 transition duration-150 cursor-pointer";

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
			onClick={onClick}
		>
			{children}
		</button>
	);
}
