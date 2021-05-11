import BaseEvent from '../../Utils/Structures/BaseEvent';
import { Guild } from 'discord.js';
import DiscordClient from '../../Client/Client';
import Schemas from '../../Utils/Structures/Schemas/Schemas';

export default class GuildCreateEvent extends BaseEvent {
	constructor() {
		super('guildCreate');
	}
	async run(client: DiscordClient, guild: Guild) {
		try {
			console.log(this.con);
			const GuildCollection = await this.con.collection('guilds');
			const GuildLogging = await this.con.collection('guildlogging');
			const GuildRoles = await this.con.collection('serverroles');
			const GuildWelcome = await this.con.collection('welcomesystem');
			const GuildLeave = await this.con.collection('leavesystem');

			await GuildCollection.insertOne(new Schemas.Guild(guild.id));
			await GuildLogging.insertOne(new Schemas.GuildLogging(guild.id));
			await GuildRoles.insertOne(new Schemas.ServerRoles(guild.id));
			await GuildWelcome.insertOne(new Schemas.WelcomeSystem(guild.id));
			await GuildLeave.insertOne(new Schemas.LeaveSystem(guild.id));
		} catch (error) {
			console.log(error);
		}
	}
}
