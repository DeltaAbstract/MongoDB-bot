import { MongoClient } from 'mongodb';

export default async function initiateConnection() {
	const con = MongoClient.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err, db) => {
			if (err) {
				return console.log(err);
			}
			console.log(`✅ | Successfully connected to the Database`);
			return console.log(db);
		}
	);
}
