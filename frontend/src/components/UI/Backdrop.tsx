import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function Backdrop({ onCloseDrawer }) {
	return createPortal(
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			type="button"
			className="top-0 left-0 z-10 fixed bg-[rgba(0,0,0,0.75)] w-full h-screen"
			onClick={onCloseDrawer}
		></motion.button>,
		document.body,
	);
}
