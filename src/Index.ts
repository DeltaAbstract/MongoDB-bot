import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import { registerCommands, registerEvents } from './Utils/Register';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

const client = new DiscordClient({});

const mongo = new MongoClient(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongo.connect((err, con) => {
	if (err) console.log(err);
	globalThis.db = con.db() as Db;
});

globalThis.client = client;

client.login(process.env.TOKEN);

registerCommands(client, '../Commands');
registerEvents(client, '../Events');
