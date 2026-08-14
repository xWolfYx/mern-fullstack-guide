export default function Avatar({ imgSrc, imgAlt, imgWidth }) {
	return (
		<div className="flex justify-center items-center size-full">
			<img
				src={imgSrc}
				alt={imgAlt}
				className="block rounded-full size-full object-cover"
				style={{ width: imgWidth, height: imgWidth }}
			/>
		</div>
	);
}
