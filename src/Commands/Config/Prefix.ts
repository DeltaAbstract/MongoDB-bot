import BaseCommand from '../../Utils/Structures/BaseCommand';
import DiscordClient from '../../Client/Client';
import { Message } from 'discord.js';

export default class PrefixCommand extends BaseCommand {
	constructor() {
		super('prefix', 'config', []);
	}
	async run(client: DiscordClient, message: Message, args: string[]) {
		if (message.author.id != message.guild.ownerID)
			return message.channel.send('You cannot use this command!');

		const newPrefix = args[0];

		if (!newPrefix)
			return message.channel.send('You are missing a required argument');

		try {
			const coll = await this.con.collection('guilds');
			await coll.findOneAndUpdate(
				{ guildId: message.guild.id },
				{ $set: { guildId: message.guild.id, prefix: newPrefix } }
			);

			return await message.channel.send(
				`Successfully updated the prefix to \`${newPrefix}\``
			);
		} catch (error) {
			console.log(error);
		}
	}
}
