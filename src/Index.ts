import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './Utils/Structures/Schemas/UserSchema';
import { registerCommands, registerEvents } from './Utils/Register';

dotenv.config();

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((m) => {
		console.log('✅ | Connected to the database');
	})
	.catch((error) => console.log(error));

const client = new DiscordClient({});

globalThis.client = client;

client.login(process.env.TOKEN);

registerCommands(client, '../Commands');
registerEvents(client, '../Events');
