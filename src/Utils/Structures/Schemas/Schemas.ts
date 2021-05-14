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
	export class RolePersist {
		guildId: Snowflake;
		roleId: Snowflake;
		userId: Snowflake;
		reason?: string;
		constructor(
			id: Snowflake,
			role: Snowflake,
			user: Snowflake,
			reason?: string
		) {
			if (!reason) reason = 'No reason given.';

			this.guildId = id;
			this.roleId = role;
			this.userId = user;
			this.reason = reason;
		}
	}
	export class Afk {
		guildId: Snowflake;
		userId: Snowflake;
		afkMessage: string;
		afkAt?: number;
		constructor(
			id: Snowflake,
			user: Snowflake,
			afkMessage?: string,
			time?: number
		) {
			if (!afkMessage) afkMessage = 'No message given';
			if (!time) time = Date.now();

			this.guildId = id;
			this.userId = user;
			this.afkMessage = afkMessage;
			this.afkAt = time;
		}
	}
	export class Tags {
		guildId: Snowflake;
		tagName: string;
		tagContent: string;
		constructor(id: Snowflake, name: string, content: string) {
			this.guildId = id;
			this.tagName = name;
			this.tagContent = content;
		}
	}
	export class Protected {
		guildId: Snowflake;
		roles: Snowflake[];
		users: Snowflake[];
		constructor(id: Snowflake) {
			this.guildId = id;
			this.roles = [];
			this.users = [];
		}
	}
	export class Reminders {
		guildId: Snowflake;
		reminderTime: number;
		reminder: string;
		constructor(id: Snowflake, time: number, reminder: string) {
			this.guildId = id;
			this.reminderTime = time;
			this.reminder = reminder;
		}
	}
	export class Economy {
		guildId: Snowflake;
		isEnabled: boolean;
		currency: string;
		startBalance: number;
		auditLog: Snowflake | null;
		maxBalanace: number;
		totalBank: number;
		totalCash: number;
		totalNetWorth: number;
		constructor(
			id: Snowflake,
			isEnabled?: boolean,
			currency?: string,
			startBalance?: number,
			auditlog?: Snowflake,
			maxBalance?: number
		) {
			this.guildId = id;
			this.isEnabled = isEnabled ? isEnabled : false;
			this.currency = currency ? currency : '💴';
			this.startBalance = startBalance ? startBalance : 0;
			this.auditLog = auditlog ? auditlog : null;
			this.maxBalanace = maxBalance ? maxBalance : null;
		}
	}
	export class ChatMoney {
		guildId: Snowflake;
		isEnabled: boolean;
		minAmount: number;
		maxAmount: number;
		constructor(
			id: Snowflake,
			isEnabled?: boolean,
			min?: number,
			max?: number
		) {
			if (!isEnabled) isEnabled = false;
			if (!min) min = 1;
			if (!max) max = 9;
			this.guildId = id;
			this.isEnabled = isEnabled;
			this.minAmount = min;
			this.maxAmount = max;
		}
	}
	export class GuildMemberEconomy {
		guildId: Snowflake;
		userId: Snowflake;
		claimedDaily: boolean;
		claimedWeekly: boolean;
		claimedYearly: boolean;
		balance: number;
		constructor(
			guild: Snowflake,
			user: Snowflake,
			daily?: boolean,
			weekly?: boolean,
			yearly?: boolean,
			balance?: number
		) {
			if (!daily) daily = false;
			if (!weekly) weekly = false;
			if (!yearly) yearly = false;
			if (!balance) balance = 0;

			this.guildId = guild;
			this.userId = user;
			this.claimedDaily = daily;
			this.claimedWeekly = weekly;
			this.claimedYearly = yearly;
			this.balance = balance;
		}
	}
	export class XP {
		guildId: Snowflake;
		isEnabled: boolean;
		maxAmount: number;
		minAmount: number;
		constructor(id: Snowflake, enabled?: boolean, max?: number, min?: 1) {
			if (!enabled) enabled = false;
			if (!max) max = 5;
			if (!min) min = 1;
			this.guildId = id;
			this.isEnabled = enabled;
			this.maxAmount = max;
			this.minAmount = min;
		}
	}
	export class GuildMemberExperience {
		guildId: Snowflake;
		userId: Snowflake;
		currentLevel: number;
		experiencePoints: number;
		constructor(
			guild: Snowflake,
			user: Snowflake,
			level?: number,
			points?: number
		) {
			if (!level) level = 0;
			if (!points) points = 0;
			this.guildId = guild;
			this.userId = user;
			this.currentLevel = level;
			this.experiencePoints = points;
		}
	}
	export class GuildSettings {
		guildId: Snowflake;
		disabledCommands: string[];
		disabledCategories: string[];
		blacklistedUsers: Snowflake[];
		blacklistedChannels: Snowflake[];
		blacklistedRoles: Snowflake[];
		constructor(
			id: Snowflake,
			commands?: string[],
			categories?: string[],
			users?: Snowflake[],
			channels?: Snowflake[],
			roles?: Snowflake[]
		) {
			if (!commands) commands = [];
			if (!categories) categories = [];
			if (!users) users = [];
			if (!channels) channels = [];
			if (!roles) roles = [];

			this.guildId = id;
			this.disabledCommands = commands;
			this.disabledCategories = categories;
			this.blacklistedUsers = users;
			this.blacklistedChannels = channels;
			this.blacklistedRoles = roles;
		}
	}
	export class BotStats {
		commandsUsed: number;
		messagesSent: number;
		constructor() {
			this.commandsUsed = 0;
			this.messagesSent = 0;
		}
	}
	export class GuildBotStats {
		guildId: Snowflake;
		messagesSent: number;
		commandsUsed: number;
		constructor(id: Snowflake) {
			this.guildId = id;
			this.messagesSent = 0;
			this.commandsUsed = 0;
		}
	}
}

export = Schemas;
