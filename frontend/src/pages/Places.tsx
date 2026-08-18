import { useParams } from "react-router-dom";
import PlaceList from "../components/layout/places/PlaceList";

export default function Places() {
	const { userId } = useParams();
	return <PlaceList userId={userId} />;
}
