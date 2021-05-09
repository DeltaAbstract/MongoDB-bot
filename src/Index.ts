import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const client = new DiscordClient({});

globalThis.client = client;

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log(`✅ | ${client.user.tag} has logged in!`);
});
