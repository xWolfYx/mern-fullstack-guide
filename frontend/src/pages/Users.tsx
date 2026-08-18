import Card from "../components/UI/Card";
import UsersList from "../components/Users/UsersList";


import users from "../data/usersData";

export default function Users() {
	return (
		<div className="bg-red-200">
			{users.length > 0 ? (
				<UsersList users={users} />
			) : (
				<div className="flex justify-center items-center text-center *:cursor-default">
					<Card>
						<h2>No users found</h2>
					</Card>
				</div>
			)}
		</div>
	);
}
