import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Users from "./pages/users/Users";

function App() {
	return (
		<>
			<MainNavigation />
			<main className="mt-20">
				<Routes>
					<Route path="/" element={<Users />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
