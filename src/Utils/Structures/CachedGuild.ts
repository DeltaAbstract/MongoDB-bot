import { Snowflake } from 'discord.js';
import {
	Cached_Guild,
	Welcome,
	Roles,
	Leave,
	Channels,
	Strings,
} from './Interfaces/CachedGuild';

export default class CachedGuild {
	id: Snowflake;
	prefix: string;
	lang: string;
	welcome: Welcome;
	leave: Leave;
	roles: Roles;
	Channels: Channels;
	Strings: Strings;
	constructor(info: Cached_Guild) {
		this.id = info.id;
		this.prefix = info.prefix;
		this.lang = info.lang;
		this.welcome = info.welcome;
		this.leave = info.leave;
		this.roles = info.roles;
		this.Channels = info.Channels;
		this.Strings = info.Strings;
	}
}
