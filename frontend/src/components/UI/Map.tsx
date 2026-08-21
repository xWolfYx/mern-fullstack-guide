import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const GOOGLE_MAPS_API = import.meta.env.VITE_GOOGLE_MAPS_API;

setOptions({
	key: GOOGLE_MAPS_API,
	v: "weekly",
});

export default function MapView({ lat, lng, zoom }) {
	const mapRef = useRef(null);

	useEffect(() => {
		async function initMap() {
			const { Map: GoogleMap } = await importLibrary("maps");
			const { AdvancedMarkerElement } = await importLibrary("marker");

			if (mapRef.current) {
				const map = new GoogleMap(mapRef.current, {
					center: { lat, lng },
					zoom,
					mapId: "a79a1ffbac31fa715e8db8c2",
				});

				new AdvancedMarkerElement({
					position: { lat, lng },
					map,
				});
			}
		}

		initMap().catch((err) => console.log(err));
	}, [lat, lng, zoom]);

	return <div className="size-full" ref={mapRef}></div>;
}
