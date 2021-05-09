import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((m) => {
	console.log("✅ | Connected to the database")
}).catch((error) => console.log(error))

const client = new DiscordClient({});

globalThis.client = client;

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log(`✅ | ${client.user.tag} has logged in!`);
});
