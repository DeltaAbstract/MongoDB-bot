import { MongoClient } from 'mongodb';

export default async function initiateConnection() {
	try {
		const con = await MongoClient.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		return con;
	} catch (error) {
		console.log(error);
	}
}
