import { MongoClient } from 'mongodb';

export default function initiateConnection() {
	try {
		let db: MongoClient;
		MongoClient.connect(
			process.env.MONGO_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err, client) => {
				if (err) console.log(err);
				db = client;
				console.log('✅ | Connected to the database!');
			}
		);
		return db;
	} catch (error) {
		console.log(error);
	}
}
