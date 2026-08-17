import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function SideDrawer({ children }) {
	return createPortal(
		<motion.aside
			initial={{ x: "-100%" }}
			animate={{ x: 0 }}
			exit={{ x: "-100%" }}
			transition={{ type: "tween" }}
			className="top-0 left-0 z-100 fixed bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] w-7/10 h-screen"
		>
			{children}
		</motion.aside>,
		document.body,
	);
}
