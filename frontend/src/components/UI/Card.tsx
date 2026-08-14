export default function Card({ children }) {
	return (
		<div className="relative bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] m-0 p-0 rounded-md overflow-hidden cursor-pointer">
			{children}
		</div>
	);
}
