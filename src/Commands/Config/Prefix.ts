import BaseCommand from '../../Utils/Structures/BaseCommand';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';
import GuildSchema from '../../Utils/Structures/Schemas/GuildSchema';

export default class PreifixCommand extends BaseCommand {
	constructor() {
		super('preifx', 'config', []);
	}
	async run(client: DiscordClient, message: Message, args: string[]) {
		const newPrefix = args[0];

		if (message.author.id != message.guild.ownerID)
			return message.channel.send('You are not the owner!');

		if (!newPrefix)
			return message.channel.send('You must mention a new prefix');

		try {
			await GuildSchema.findOneAndUpdate(
				{ guildId: message.guild.id },
				{ guildId: message.guild.id, prefix: newPrefix },
				{ upsert: true }
			);
			await message.channel.send(`Prefix has been set to ${newPrefix}`);
			return;
		} catch (error) {
			console.log(error);
		}
	}
}
