import { MongoClient, Db } from 'mongodb';

export default class DB {
	con: Db;
	constructor() {
		const client = new MongoClient(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		client.connect((err, client) => {
			if (err) return console.log(err);
			console.log('Connected to the DB!');
			this.con = client.db();
		});
	}
}
