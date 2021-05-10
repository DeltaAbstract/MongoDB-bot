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
		constructor(id: Snowflake, opts: GuildLoggingOpts) {
			this.guildId = id;
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
}

export = Schemas;
