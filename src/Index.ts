import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import { registerCommands, registerEvents } from './Utils/Register';

dotenv.config();

const client = new DiscordClient({});

globalThis.client = client;

client.login(process.env.TOKEN);

registerCommands(client, '../Commands');
registerEvents(client, '../Events');
