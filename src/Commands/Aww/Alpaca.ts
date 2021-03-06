import BaseCommand from '../../Utils/Structures/BaseCommand';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';

export default class AlpacaCommand extends BaseCommand {
	constructor() {
		super('alpaca', 'aww', []);
	}
	async run(client: DiscordClient, message: Message, args: string[]) {
		console.log('This is working!');
		const lang = await this.Translator.Getlang(message.guild.id);
	}
}
