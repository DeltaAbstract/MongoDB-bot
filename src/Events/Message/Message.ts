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
	}
}
