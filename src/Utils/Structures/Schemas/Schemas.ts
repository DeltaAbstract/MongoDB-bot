import { Snowflake } from 'discord.js';

namespace Schemas {
	export class Guild {
		guildId: Snowflake;
		prefix: string;
		lang: string;
		constructor(id: Snowflake, prefix?: string | '?', lang?: string) {
			this.guildId = id;
			this.prefix = prefix ? prefix : '?';
			this.lang = lang ? lang : 'en';
		}
	}
	export type GuildLoggingOpts = {
		modLogId?: Snowflake;
		memberLogId?: Snowflake;
		publicModLogId?: Snowflake;
		roleLogId?: Snowflake;
		appealsId?: Snowflake;
		reportsId?: Snowflake;
		actionLogId?: Snowflake;
		suggestionsId?: Snowflake;
		messageLogId?: Snowflake;
		serverLogId?: Snowflake;
		inviteLogId?: Snowflake;
		emojiLogId?: Snowflake;
		channelLogId?: Snowflake;
	};
	export class GuildLogging {
		guildId: Snowflake;
		modLogId: Snowflake | null;
		memberLogId: Snowflake | null;
		publicModLogId: Snowflake | null;
		roleLogId: Snowflake | null;
		appealsId: Snowflake | null;
		reportsId: Snowflake | null;
		actionLogId: Snowflake | null;
		suggestionsId: Snowflake | null;
		messageLogId: Snowflake | null;
		serverLogId: Snowflake | null;
		inviteLogId: Snowflake | null;
		emojiLogId: Snowflake | null;
		channelLogId: Snowflake | null;
		constructor(id: Snowflake, opts?: GuildLoggingOpts) {
			this.guildId = id;
			if (!opts) opts = {};
			this.modLogId = opts.modLogId ? opts.modLogId : null;
			this.memberLogId = opts.memberLogId ? opts.memberLogId : null;
			this.publicModLogId = opts.publicModLogId ? opts.publicModLogId : null;
			this.roleLogId = opts.roleLogId ? opts.roleLogId : null;
			this.appealsId = opts.appealsId ? opts.appealsId : null;
			this.reportsId = opts.reportsId ? opts.reportsId : null;
			this.actionLogId = opts.actionLogId ? opts.actionLogId : null;
			this.suggestionsId = opts.suggestionsId ? opts.suggestionsId : null;
			this.messageLogId = opts.messageLogId ? opts.messageLogId : null;
			this.serverLogId = opts.serverLogId ? opts.serverLogId : null;
			this.inviteLogId = opts.inviteLogId ? opts.inviteLogId : null;
			this.emojiLogId = opts.emojiLogId ? opts.emojiLogId : null;
			this.channelLogId = opts.channelLogId ? opts.channelLogId : null;
		}
	}
	export type ModerationOpts = {
		reason?: string;
		messageId?: Snowflake;
		publicMessageId: Snowflake;
		modLogId: Snowflake;
		publicLogId: Snowflake;
		moderationDate: number;
		lastUpdated: number;
		updatedBy: Snowflake;
	};
	export class GuildModerations {
		guildId: Snowflake;
		moderation: string;
		caseNumber: string | number;
		moderatorId: Snowflake;
		reason: string | null;
		messageId: Snowflake | null;
		publicMessageId: Snowflake | null;
		modLogId: Snowflake | null;
		publicLogId: Snowflake | null;
		moderationDate: number;
		lastUpdated: number;
		updatedBy: Snowflake | null;
		constructor(
			id: Snowflake,
			moderation: string,
			caseNumber: string | number,
			moderatorId: Snowflake,
			opts?: ModerationOpts
		) {
			this.guildId = id;
			this.moderation = moderation;
			this.caseNumber = caseNumber;
			this.moderatorId = moderatorId;
			this.reason = opts.reason ? opts.reason : null;
			this.messageId = opts.messageId ? opts.messageId : null;
			this.publicMessageId = opts.publicMessageId ? opts.publicMessageId : null;
			this.modLogId = opts.modLogId ? opts.modLogId : null;
			this.publicLogId = opts.publicLogId ? opts.publicLogId : null;
			this.moderationDate = opts.moderationDate
				? opts.moderationDate
				: Date.now();
			this.lastUpdated = opts.lastUpdated ? opts.lastUpdated : Date.now();
			this.updatedBy = opts.updatedBy ? opts.updatedBy : null;
		}
	}
	export class BlacklistedUser {
		userId: Snowflake;
		reason: string | null;
		constructor(id: Snowflake, reason?: string) {
			if (!reason) reason = null;

			this.userId = id;
			this.reason = reason;
		}
	}
	export class ServerRoles {
		guildId: Snowflake;
		muteRoleId: Snowflake | null;
		adminRoleId: Snowflake | null;
		modRoleId: Snowflake | null;
		constructor(
			id: Snowflake,
			adminrole?: Snowflake,
			muterole?: Snowflake,
			modrole?: Snowflake
		) {
			if (!adminrole) adminrole = null;
			if (!muterole) muterole = null;
			if (!modrole) modrole = null;

			this.guildId = id;
			this.adminRoleId = adminrole;
			this.muteRoleId = muterole;
			this.modRoleId = modrole;
		}
	}
	export class WelcomeSystem {
		guildId: Snowflake;
		isEnabled: boolean;
		media: 'text' | 'image' | null;
		welcomeMessage: string | null;
		welcomeChannelId: Snowflake | null;
		constructor(
			id: Snowflake,
			isEnabled?: boolean,
			media?: 'text' | 'image',
			welcomeMessage?: string,
			welcomeChannelId?: Snowflake
		) {
			if (!isEnabled) isEnabled = false;
			if (!media) media = null;
			if (!welcomeMessage) welcomeMessage = null;
			if (!welcomeChannelId) welcomeChannelId = null;

			this.guildId = id;
			this.isEnabled = isEnabled;
			this.media = media;
			this.welcomeMessage = welcomeMessage;
			this.welcomeChannelId = welcomeChannelId;
		}
	}
	export class LeaveSystem {
		guildId: Snowflake;
		isEnabled: boolean;
		media: 'text' | 'image' | null;
		leaveMessage: string | null;
		leaveChannelId: Snowflake | null;
		constructor(
			id: Snowflake,
			isEnabled?: boolean,
			media?: 'text' | 'image',
			leaveMessage?: string,
			leaveChannelId?: Snowflake
		) {
			if (!isEnabled) isEnabled = false;
			if (!media) media = null;
			if (!leaveMessage) leaveMessage = null;
			if (!leaveChannelId) leaveChannelId = null;

			this.guildId = id;
			this.isEnabled = isEnabled;
			this.media = media;
			this.leaveMessage = leaveMessage;
			this.leaveChannelId = leaveChannelId;
		}
	}
}

export = Schemas;
