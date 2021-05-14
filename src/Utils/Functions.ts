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
		constructor() {}
		async Translate() {}
		async Getlang() {}
		Getstring() {}
		Getdescription() {}
	}
	export class Utils {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {
			this.client = globalThis.client as DiscordClient;
		}
		Duration() {}
		Capitalize() {}
		Paginate() {}
		FetchCache() {}
		MentionRole() {}
		Mentionchannel() {}
		Mentionuser() {}
	}
	export class Channels {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
		async Memberlog() {}
		async Modlog() {}
		async Rolelog() {}
		async Appeals() {}
		async Reports() {}
		async Actionlog() {}
		async Suggestions() {}
		async Messagelog() {}
		async Serverlog() {}
		async Invitelog() {}
		async Channellog() {}
		async Emojilog() {}
		async PublicModlog() {}
	}
	export class Settings {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
		async Prefix(id: Snowflake, force?: boolean) {}
		async Admiinrole() {}
		async Modrole() {}
		async Muterole() {}
		async Welcomesystem() {}
		async Leavesystem() {}
	}
	export class Economy {}
	export class XP {}
	export class Embed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
		Base() {}
	}
	export class ErrorEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
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
		constructor() {}
		async Base() {}
	}
	export class HelpEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
		async Base() {}
	}
	export class GeneratingEmbed {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
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
		constructor() {}
		async Base() {}
	}
	export class Moderation {
		client: DiscordClient;
		database: Collection<Snowflake, CachedGuild>;
		con: Db;
		constructor() {}
		async FetchModeration() {}
		async InsertModeration() {}
	}
}

export = Functions;
