import { AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";

export default function Modal(props) {
	return (
		<AnimatePresence>
			<Backdrop isOpen={props.showMap} onClose={props.onClose}>
				<ModalOverlay {...props} />
			</Backdrop>
		</AnimatePresence>
	);
}

function ModalOverlay({
	styles,
	headerText,
	onSubmit,
	children,
	contentStyles,
	footer,
	footerStyles,
}) {
	return createPortal(
		<div
			className={`${styles} top-[22vh] left-[10%] md:left-[calc(50%-20rem)] z-100 fixed bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] rounded-lg md:w-160 w-8/10`}
		>
			<header className="bg-[#2a006e] px-2 py-4 w-full text-white">
				<h2 className="m-2">{headerText}</h2>
			</header>
			<form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
				<div className={`${contentStyles} px-2 py-4`}>{children}</div>
				<footer className={`${footerStyles} px-2 py-4`}>{footer}</footer>
			</form>
		</div>,
		document.body,
	);
}
