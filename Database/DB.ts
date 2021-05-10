import { MongoClient, Db } from 'mongodb';

export default function initConnection() {
	const client = new MongoClient(process.env.MONGO_URI);
	let con: Db;
	client.connect().then((connection) => {
		con = connection.db();
	});
	return con;
}
