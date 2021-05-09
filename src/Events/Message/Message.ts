import BaseEvent from '../../Utils/Structures/BaseEvent';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';
import GuildSchema from '../../Utils/Structures/Schemas/GuildSchema';

export default class MessageEvent extends BaseEvent {
	constructor() {
		super('message');
	}
	async run(client: DiscordClient, message: Message) {
		if (message.author.bot) return;

		const result: any = await GuildSchema.findOne({
			guildId: message.guild.id,
		});

		const prefix = result?.prefix || '?';

		console.log(prefix);

		if (message.content.startsWith(prefix)) {
			const [cmdName, ...cmdArgs] = message.content
				.slice(prefix.lengh)
				.trim()
				.split(/\s+/);

			const command =
				client.commands.get(cmdName.toLowerCase()) ||
				client.commands.get(client.aliases.get(cmdName.toLowerCase()));

			console.log(client.commands);

			if (command) {
				console.log(command);
				command.run(client, message, cmdArgs);
			}
		}
	}
}
