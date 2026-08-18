export default function Card({
	children,
	styles,
}: {
	children: React.ReactNode;
	styles?: string;
}) {
	return (
		<div
			className={`${styles} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] m-0 p-4 rounded-md overflow-hidden`}
		>
			{children}
		</div>
	);
}
