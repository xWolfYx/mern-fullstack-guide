import User from "./User";

export default function UsersList({ users }) {
	return (
		<div className="flex flex-wrap justify-center mx-0 my-auto p-0 w-[90%] list-none">
			<ul>
				{users.map((user) => (
					<User key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
}
