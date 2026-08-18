import Card from "../components/UI/Card";
import UsersList from "../components/Users/UsersList";

class User {
	id: string;
	name: string;
	image: string;
	places: { name: string }[];

	constructor(name: string, image: string, places: { name: string }[]) {
		this.id = crypto.randomUUID();
		this.name = name;
		this.image = image;
		this.places = places;
	}
}

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

const users = [];

const john = new User(
	"John",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKbniyQWq0y5_13v-b4fQ7dKIzZEGLg3mNLq9LlpQTLGpo8lPE8hsChmP&s=10",
	[{ name: "Tokyo" }, { name: "Bangkok" }],
);
const jane = new User(
	"Jane",
	"https://media.istockphoto.com/id/1199005805/photo/tourist-in-paris.jpg?s=612x612&w=0&k=20&c=jGZUDhNeScf1UlhccJTcZ6gGP4B6qMbKh_3rrIZFCR0=",
	[{ name: "Paris" }],
);
const robert = new User(
	"Robert",
	"https://www.transitionsabroad.com/listings/living/articles/images/cairo-pyramid-giza.jpg",
	[{ name: "Cairo" }],
);
const zara = new User(
	"Zara",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsxbjdTOfafcyqVd3xYDzJ0h4xpAZEmD6wu-94bc9HUWsoaCNFgNwqHk&s=10",
	[{ name: "New York" }],
);
const salima = new User(
	"Salima",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi46gLlb6s73HyrGZYKMvYyVuNIQyxLGqjGKnE7IZ-02ZybD1jm2uLYYJ4&s=10",
	[{ name: "Tbilisi" }],
);

users.push(john, jane, robert, zara, salima);
