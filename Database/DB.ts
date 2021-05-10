import { MongoClient, Db } from 'mongodb';

export default async function initConnection() {
	const client = new MongoClient(process.env.MONGO_URI);
	return client;
}
