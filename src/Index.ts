import DiscordClient from './Client/Client';
import * as dotenv from 'dotenv';
import { registerCommands, registerEvents } from './Utils/Register';
import { MongoClient } from 'mongodb';
import test from '../Database/DB';

dotenv.config();

const client = new DiscordClient({});

globalThis.client = client;

test();

client.login(process.env.TOKEN);

registerCommands(client, '../Commands');
registerEvents(client, '../Events');
