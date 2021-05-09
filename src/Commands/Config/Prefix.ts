import BaseCommand from '../../Utils/Structures/BaseCommand';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';

export default class PreifixCommand extends BaseCommand {
	constructor() {
		super('preifx', 'config', []);
	}
	async run(client: DiscordClient, message: Message, args: string[]) {}
}
