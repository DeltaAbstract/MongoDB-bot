import { EmbedFieldData, Message, MessageEmbed, Snowflake } from 'discord.js';
import BaseCommand from '../BaseCommand';

namespace Funcs {
	export type Locale = {
		error_message: string;
		success: string;
		generating: string;
		status: string;
		working: string;
		name: string;
		category: string;
		aliases: string;
		usage: string;
		description: string;
		accessible_by: string;
		permissions: string;
		sub_commands: string;
		example: string;
		guildonly: string;
		owner_only: string;
		cooldown: string;
		user_permissions: string;
		yes: string;
		no: string;
		none: string;
		is_required: string;
		is_optional: string;
		seconds: string;
		unexpected_error: string;
		user_blocked: string;
		cooldown_message: string;
		new_action: string;
		event: string;
		channel: string;
		message: string;
		user: string;
		author: string;
		role: string;
		invite: string;
		guild_member: string;
		deleted: string;
		created: string;
		banned: string;
		kicked: string;
		muted: string;
		updated: string;
		badges: string;
		presence: string;
		created_at: string;
		joined_at: string;
		deleted_at: string;
		information: string;
		report: string;
		suggestions: string;
		suggest: string;
		new_suggestion: string;
		provided_by: string;
		posted_by: string;
		old_value: string;
		new_value: string;
		enabled: string;
		disabled: string;
		successfully_set: string;
		successfully_updated: string;
		error_details: string;
		cancelled_selection: string;
		timed_out: string;
		invalid_choice: string;
		no_results_found: string;
		text_too_long: string;
		user_missing_permissions: string;
		bot_missing_permissions: string;
		send_image: string;
		send_first_image: string;
		send_second_image: string;
		mention_attachment_me: string;
		mention_username: string;
		send_text: string;
		first_user: string;
		seocnd_user: string;
		third_user: string;
		please_specify_currency: string;
		must_be_attachment: string;
		missing_required_argument: string;
		missing_required_role: string;
		successfully_enabled: string;
		successfully_disabled: string;
		enable_or_disable: string;
		enable_disable_update: string;
		cannot_find_role: string;
		cannot_find_user: string;
		cannot_find_channel: string;
		is_already_enabled: string;
		is_already_disabled: string;
		current_setting: string;
		cannot_set_to: string;
		missing_user_mention: string;
		missing_role_mention: string;
		missing_channel_mention: string;
		no_code_found: string;
		api_error: string;
		nsfw_error: string;
		owner_error: string;
		mention_hex_code: string;
		invalid_colour: string;
		mention_name: string;
		already_mentionable: string;
		coloudnt_find_images: string;
		location: string;
		population: string;
		total_stats: string;
		today_stats: string;
		per_million_stats: string;
		cases: string;
		deaths: string;
		recovered: string;
		last_updated_at: string;
		new: string;
		total: string;
		missing_query: string;
		couldnt_find_query: string;
		original_style: string;
		recolors: string;
		tv_movie: string;
		gaming: string;
		meme: string;
		anime: string;
		pepe: string;
		celebrity: string;
		blobs: string;
		thinking: string;
		animals: string;
		cute: string;
		letters: string;
		utility: string;
		logos: string;
		flags: string;
		hearts: string;
		other: string;
		animated: string;
		submitted_by: string;
		faves: string;
		shortcodes: string;
		uploaded_at: string;
		rating: string;
		source: string;
		full_name: string;
		bio: string;
		followers: string;
		following: string;
		posts: string;
		verified: string;
		private: string;
		account_id: string;
		mention_song: string;
		cannot_find_song: string;
		lyrics: string;
		content: string;
		cannot_view_user: string;
		total_karma: string;
		employee: string;
		premium: string;
		subscribers: string;
		online_members: string;
		age: string;
		usernames: string;
		no_snipes: string;
		snipe_message: string;
		upvote: string;
		downvote: string;
		multiple_locations: string;
		mention_city: string;
		temperature: string;
		humidity: string;
		wind_speed: string;
		wind_display: string;
		videos: string;
		views: string;
		duration: string;
	};
	export type Languages =
		| (
				| 'af'
				| 'am'
				| 'ar'
				| 'as'
				| 'az'
				| 'be'
				| 'bg'
				| 'bn'
				| 'bs'
				| 'ca'
				| 'co'
				| 'cs'
				| 'cy'
				| 'da'
				| 'de'
				| 'el'
				| 'en'
				| 'eo'
				| 'es'
				| 'et'
				| 'fa'
				| 'fi'
				| 'fj'
				| 'fr'
				| 'fy'
				| 'ga'
				| 'gd'
				| 'gl'
				| 'gu'
				| 'ha'
				| 'he'
				| 'hi'
				| 'hr'
				| 'ht'
				| 'hu'
				| 'id'
				| 'ig'
				| 'is'
				| 'it'
				| 'ja'
				| 'jv'
				| 'ka'
				| 'kk'
				| 'km'
				| 'kn'
				| 'ko'
				| 'ku'
				| 'ky'
				| 'la'
				| 'lb'
				| 'lo'
				| 'lt'
				| 'lv'
				| 'mg'
				| 'mi'
				| 'mk'
				| 'ml'
				| 'mn'
				| 'mr'
				| 'ms'
				| 'mt'
				| 'my'
				| 'ne'
				| 'nl'
				| 'no'
				| 'ny'
				| 'or'
				| 'pl'
				| 'ps'
				| 'pt'
				| 'ro'
				| 'ru'
				| 'rw'
				| 'sd'
				| 'si'
				| 'sk'
				| 'sl'
				| 'sm'
				| 'sn'
				| 'so'
				| 'sq'
				| 'sr'
				| 'st'
				| 'su'
				| 'sv'
				| 'sw'
				| 'ta'
				| 'te'
				| 'tg'
				| 'th'
				| 'tk'
				| 'to'
				| 'tr'
				| 'tt'
				| 'ty'
				| 'ug'
				| 'uk'
				| 'ur'
				| 'vi'
				| 'xh'
				| 'yi'
				| 'yo'
				| 'zu'
		  )
		| string;
	export type colours = {
		red: string;
		green: string;
		blue: string;
		purple: string;
		pink: string;
		orange: string;
		yellow: string;
		gold: string;
		cyan: string;
		cream: string;
		white: string;
		random: 'random';
	};
	export interface ColoursOpts {
		shade?: 'dark' | 'light';
	}
	export type pagination = (
		msg: Message,
		pages: MessageEmbed[],
		emojiList: ['⏪', '⏩'] | string[],
		timeout: number | 120000
	) => Promise<void>;
	export interface PaginateOpts {
		embeds?: MessageEmbed[];
		emojiList?: string[];
		timeout?: number;
	}
	export type toFetch =
		| 'prefix'
		| 'lang'
		| 'channels'
		| 'roles'
		| 'strings'
		| 'welcome'
		| 'leave';
	export interface EmbedOpts {
		iconURL: string;
		description: string;
		text: string | BaseCommand;
		title?: string;
		fields?: EmbedFieldData[];
		link?: string;
		image?: string;
	}
	export interface BaseErrorOpts {
		iconURL: string;
		id: Snowflake;
		text: string | BaseCommand;
		error_messsage: string;
		image?: string;
		link?: string;
		fields?: EmbedFieldData[];
	}
	export interface ErrorEmbedOpts {
		iconURL: string;
		id: Snowflake;
		text: string | BaseCommand;
		fields?: EmbedFieldData[];
		image?: string;
		link?: string;
	}
	export interface CooldownErrorOpts {
		iconURL: string;
		id: Snowflake;
		toUse: string;
		seconds: string | number;
		text: string | BaseCommand;
		fields?: EmbedFieldData[];
		image?: string;
		link?: string;
	}
	export interface SuccessEmbedOpts {
		iconURL: string;
		id: Snowflake;
		success_message: string;
		text: string | BaseCommand;
		fields?: EmbedFieldData[];
		image?: string;
		link?: string;
	}
	export interface HelpEmbedOpts {
		iconURL: string;
		command: BaseCommand;
		message: Message;
	}
	export interface BaseGeneratingOpts {
		iconURL: string;
		id: Snowflake;
		provider: string;
		text: string | BaseCommand;
		image?: string;
		link?: string;
		fields?: EmbedFieldData[];
	}
	export interface GeneratingEmbedOpts {}
	export interface ImageEmbedOpts {}
	export interface InsertModerationOpts {}
	export interface Values {}
}

export = Funcs;
