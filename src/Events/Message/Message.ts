import BaseEvent from '../../Utils/Structures/BaseEvent';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';

export default class MessageEvent extends BaseEvent {
	constructor() {
		super('message');
	}
	async run(client: DiscordClient, message: Message) {
		if (message.author.bot) return;

		console.log(this.db);

		const result = await this.db.collection('guilds');
		const test = await result.findOne({ guildId: message.guild.id });

		console.log(result);
		console.log(test);

		const prefix: string = '?';

		if (message.content.startsWith(prefix)) {
			const [cmdName, ...cmdArgs] = message.content
				.slice(prefix.length)
				.trim()
				.split(/\s+/);
			const command =
				client.commands.get(cmdName.toLowerCase()) ||
				client.commands.get(client.aliases.get(cmdName.toLowerCase()));

			if (command) {
				command.run(client, message, cmdArgs);
			}
		}
	}
}
