import {
	Snowflake,
	EmbedFieldData,
	Message,
	MessageEmbed,
	Client,
	Collection,
} from 'discord.js';
import DiscordClient from '../Client/Client';
import Funcs from './Structures/Interfaces/Funcs';
import Pagination from 'discord.js-pagination';
import { Db } from 'mongodb';
import CachedGuild from './Structures/CachedGuild';
import { Leave, Welcome } from './Structures/Interfaces/CachedGuild';

namespace Functions {
	export class Colour {
		constructor() {}
		Set() {}
	}
	export class Translator {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Translate(id: Snowflake, text: string) {}
		async Getlang(id: Snowflake, force?: boolean, cache?: boolean) {
			if (!force) force = false;
			if (!cache) cache = true;
		}
		Getstring(lang: string, string: keyof Funcs.Locale, ...vars: string[]) {}
		Getdescription(lang: string, string: string) {}
	}

	export class Utils {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		Duration() {}
		Capitalize(string: string) {}
		Paginate() {}
		FetchCache(id: Snowflake, toFetch?: string) {}
		MentionRole(id: Snowflake) {}
		Mentionchannel(id: Snowflake) {}
		Mentionuser(id: Snowflake) {}
	}
	export class Channels {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Memberlog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Modlog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Rolelog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Appeals(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Reports(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Actionlog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Suggestions(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Messagelog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Serverlog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Invitelog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Channellog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Emojilog(id: Snowflake, force?: boolean, cache?: boolean) {}
		async PublicModlog(id: Snowflake, force?: boolean, cache?: boolean) {}
	}
	export class Settings {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Prefix(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Adminrole(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Modrole(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Muterole(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Welcomesystem(id: Snowflake, force?: boolean, cache?: boolean) {}
		async Leavesystem(id: Snowflake, force?: boolean, cache?: boolean) {}
	}
	export class Economy {}
	export class XP {}
	export class Embed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		Base() {}
	}
	export class ErrorEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Base() {}
		async ApiError() {}
		async NsfwError() {}
		async CooldownError() {}
		async UnexpectedError() {}
		async InvalidChoice() {}
		async Noresult() {}
		async Clientperms() {}
		async Userperms() {}
	}
	export class SuccessEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Base() {}
	}
	export class HelpEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Base() {}
	}
	export class GeneratingEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Base() {}
		async DogCeoApi() {}
		async NekosLife() {}
		async NekosBot() {}
		async DiscordIG() {}
		async Duncte123() {}
		async SomeRandomApi() {}
		async NekosFun() {}
	}
	export class ImageEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async Base() {}
	}
	export class Moderation {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
			this.database = this.client.database;
			this.con = globalThis.db as Db;
		}
		async FetchModeration() {}
		async InsertModeration() {}
	}
}

export = Functions;
