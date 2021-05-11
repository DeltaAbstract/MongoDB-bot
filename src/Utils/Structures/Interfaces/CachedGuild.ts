import { Snowflake } from 'discord.js';

namespace CachedGuildTypes {
	export interface Welcome {
		channelId: Snowflake | null;
		isEnabled: boolean;
		media?: 'text' | 'image' | null;
		welcomeMessage?: string | null;
	}
	export interface Leave {
		channelId: Snowflake | null;
		isEnabled: boolean;
		media?: string;
		leaveMessage?: string | null;
	}
	export interface Roles {
		modrole: Snowflake | null;
		muterole: Snowflake | null;
		adminrole: Snowflake | null;
	}
	export interface Channels {
		memberlog: Snowflake | null;
		modlog: Snowflake | null;
		rolelog: Snowflake | null;
		appeals: Snowflake | null;
		reports: Snowflake | null;
		actionlog: Snowflake | null;
		suggestions: Snowflake | null;
		messagelog: Snowflake | null;
		serverlog: Snowflake | null;
		invitelog: Snowflake | null;
		channellog: Snowflake | null;
		emojilog: Snowflake | null;
		publicmodlog: Snowflake | null;
	}

	export interface Strings {
		error_message: string;
		generating: string;
		SomeRandomAPI: string;
		NekosFun: string;
		NekosBot: string;
		NekosLife: string;
		DiscordIG: string;
		Duncte123: string;
		DogCeoAPI: string;
		FunResponses: string;
		Alexflipnote: string;
		status: string;
		working: string;
		name: string;
		category: string;
		aliases: string;
		usage: string;
		description: string;
		accessible_by: string;
		permissions: string;
		subCommands: string;
		example: string;
		guild_only: string;
		owner_only: string;
		cooldown: string;
		user_permissions: string;
		yes: string;
		no: string;
		none: string;
		is_required: string;
		is_optional: string;
		seconds: string;
	}

	export interface Cached_Guild {
		id: Snowflake;
		prefix: string;
		lang: string;
		welcome: Welcome;
		leave: Leave;
		roles: Roles;
		Channels: Channels;
		Strings: Strings;
	}
}

export = CachedGuildTypes;
