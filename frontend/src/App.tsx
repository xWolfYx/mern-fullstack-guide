import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/navigation/MainNavigation";
import Places from "./pages/Places";
import Users from "./pages/Users";

function App() {
	return (
		<>
			<MainNavigation />
			<main className="mt-20">
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/user/:userId/places" element={<Places />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
