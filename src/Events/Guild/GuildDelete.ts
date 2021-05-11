import BaseEvent from '../../Utils/Structures/BaseEvent';
import { Guild } from 'discord.js';
import DiscordClient from '../../Client/Client';

export default class GuildDeleteEvent extends BaseEvent {
	constructor() {
		super('guildDelete');
	}
	async run(client: DiscordClient, guild: Guild) {
		try {
			const GuildCollection = await this.con.collection('guilds');
			const GuildLogging = await this.con.collection('guildlogging');
			const GuildRoles = await this.con.collection('serverroles');
			const GuildWelcome = await this.con.collection('welcomesystem');
			const GuildLeave = await this.con.collection('leavesystem');

			await GuildCollection.deleteOne({ guildId: guild.id });
			await GuildLogging.deleteOne({ guildId: guild.id });
			await GuildRoles.deleteOne({ guildId: guild.id });
			await GuildWelcome.deleteOne({ guildId: guild.id });
			await GuildLeave.deleteOne({ guildId: guild.id });
		} catch (error) {
			console.log(error);
		}
	}
}
