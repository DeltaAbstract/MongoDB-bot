import { Client, ClientOptions, Collection, Snowflake } from 'discord.js';

export default class DiscordClient extends Client {
	constructor(options?: ClientOptions) {
		super(options);
	}
}
