import BaseEvent from '../../Utils/Structures/BaseEvent';
import { Guild } from 'discord.js';
import DiscordClient from '../../Client/Client';

export default class GuildCreateEvent extends BaseEvent {
	constructor() {
		super('guildCreate');
	}
	async run(client: DiscordClient, guild: Guild) {}
}
