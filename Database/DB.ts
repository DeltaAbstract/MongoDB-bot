import { MongoClient } from 'mongodb';

async function initiateConnection() {
	const con = await MongoClient.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err, db) => {
			if (err) {
				return console.log(err);
			}
			return console.log(db);
		}
	);
}

export = initiateConnection();
