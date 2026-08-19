class User {
	id: string;
	name: string;
	image: string;
	places: {
		id: string;
		imageUrl: string;
		title: string;
		description: string;
		address: string;
		creatorId: string;
		location: string;
	}[];

	constructor(
		id: string,
		name: string,
		image: string,
		places: {
			id: string;
			imageUrl: string;
			title: string;
			description: string;
			address: string;
			creatorId: string;
			location: string;
		}[],
	) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.places = places;
	}
}

const users = [];

const john = new User(
	"e1469148-76db-4e45-995b-6b21a0e2ce12",
	"John",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKbniyQWq0y5_13v-b4fQ7dKIzZEGLg3mNLq9LlpQTLGpo8lPE8hsChmP&s=10",
	[
		{
			id: "2",
			imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
			title: "Kyoto",
			description:
				"Kyoto, once the capital of Japan, is famous for its numerous classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.",
			address: "Kyoto, Japan",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce12",
			location: "35.011, 135.768",
		},
		{
			id: "3",
			imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
			title: "Osaka",
			description:
				"Osaka is a large port city and commercial hub on the Japanese island of Honshu, known for its modern architecture, nightlife, and hearty street food.",
			address: "Osaka, Japan",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce12",
			location: "34.693, 135.502",
		},
	],
);

const jane = new User(
	"e1469148-76db-4e45-995b-6b21a0e2ce11",
	"Jane",
	"https://media.istockphoto.com/id/1199005805/photo/tourist-in-paris.jpg?s=612x612&w=0&k=20&c=jGZUDhNeScf1UlhccJTcZ6gGP4B6qMbKh_3rrIZFCR0=",
	[
		{
			id: "4",
			imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
			title: "Nice",
			description:
				"Nice is the capital of the Alpes-Maritimes department on the French Riviera, blessed with a Mediterranean climate and pebble beaches.",
			address: "Nice, France",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce11",
			location: "43.710, 7.262",
		},
		{
			id: "5",
			imageUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
			title: "Lyon",
			description:
				"Lyon is the capital city in France's Auvergne-Rhône-Alpes region, known for its historical landmarks, gastronomy, and Renaissance architecture.",
			address: "Lyon, France",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce11",
			location: "45.764, 4.835",
		},
	],
);

const robert = new User(
	"e1469148-76db-4e45-995b-6b21a0e2ce13",
	"Robert",
	"https://www.transitionsabroad.com/listings/living/articles/images/cairo-pyramid-giza.jpg",
	[
		{
			id: "6",
			imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750",
			title: "Luxor",
			description:
				"Luxor is a city on the east bank of the Nile River in southern Egypt, often described as the world's greatest open-air museum.",
			address: "Luxor, Egypt",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce13",
			location: "25.687, 32.639",
		},
		{
			id: "7",
			imageUrl:
				"https://www.tripsinegypt.com/wp-content/uploads/2023/03/how-to-enjoy-your-tour-in-aswan-city-trips-in-egypt.jpg",
			title: "Aswan",
			description:
				"Aswan is a bustling city situated just north of Lake Nasser, known for its scenic views of the Nile and ancient Nubian culture.",
			address: "Aswan, Egypt",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce13",
			location: "24.088, 32.899",
		},
		{
			id: "8",
			imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
			title: "Alexandria",
			description:
				"Alexandria is a Mediterranean port city in Egypt, famous for its Greco-Roman landmarks, ancient history, and scenic seaside promenades.",
			address: "Alexandria, Egypt",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce13",
			location: "31.200, 29.918",
		},
	],
);

const zara = new User(
	"e1469148-76db-4e45-995b-6b21a0e2ce14",
	"Zara",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsxbjdTOfafcyqVd3xYDzJ0h4xpAZEmD6wu-94bc9HUWsoaCNFgNwqHk&s=10",
	[
		{
			id: "9",
			imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
			title: "Chicago",
			description:
				"Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S., famed for its bold architecture, museums, and deep-dish pizza.",
			address: "Chicago, IL, USA",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce14",
			location: "41.878, -87.629",
		},
	],
);

const salima = new User(
	"e1469148-76db-4e45-995b-6b21a0e2ce15",
	"Salima",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi46gLlb6s73HyrGZYKMvYyVuNIQyxLGqjGKnE7IZ-02ZybD1jm2uLYYJ4&s=10",
	[
		{
			id: "1",
			imageUrl:
				"https://www.kellyprincewrites.com/wp-content/uploads/2022/12/Prague48-800x1000.jpg",
			title: "Prague",
			description: `Prague is the capital and largest city of the Czech Republic, set along the Vltava River. Home to roughly 1.4 million people, it is known as the "City of a Hundred Spires" for its stunning Gothic, Renaissance, and Baroque architecture, rich music history, and well-preserved medieval old town.`,
			address: "",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce15",
			location: "50.088, 14.421",
		},
		{
			id: "10",
			imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
			title: "London",
			description:
				"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
			address: "London, UK",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce15",
			location: "51.507, -0.127",
		},
		{
			id: "11",
			imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
			title: "Rome",
			description:
				"Rome is the capital city of Italy, renowned for its nearly 3,000 years of globally influential art, architecture, and culture.",
			address: "Rome, Italy",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce15",
			location: "41.902, 12.496",
		},
		{
			id: "12",
			imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
			title: "Vienna",
			description:
				"Vienna, Austria's capital, lies in the country's east on the Danube River, known for its artistic and intellectual legacy shaped by Mozart and Beethoven.",
			address: "Vienna, Austria",
			creatorId: "e1469148-76db-4e45-995b-6b21a0e2ce15",
			location: "48.208, 16.373",
		},
	],
);

users.push(john, jane, robert, zara, salima);

export default users;
