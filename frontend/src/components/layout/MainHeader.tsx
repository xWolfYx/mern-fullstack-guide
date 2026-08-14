export default function MainHeader({ children }) {
	return (
		<header className="top-0 left-0 fixed flex items-center md:content-between bg-[#ff0055] shadow-[0_2px_6px_rgba(0,0,0,0.26)] px-4 py-0 w-full h-16">
			{children}
		</header>
	);
}
