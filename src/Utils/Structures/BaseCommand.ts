import { Message } from 'discord.js';
import DiscordClient from '../../Client/Client';
import { Db } from 'mongodb';

export default abstract class BaseCommand {
	// API here
	// Functions here
	// Misc
	con: Db;
	constructor(
		private name: string,
		private category: string,
		private aliases: string[],
		private usage?: string,
		private description?: string,
		private accessibleby?: string,
		private Subcommands?: string[],
		private example?: string[],
		private botpermissions?: string[],
		private userpermissions?: string[],
		private guildOnly?: boolean | string,
		private ownerOnly?: boolean | string,
		private nsfw?: boolean | string,
		private cooldown?: number,
		private status?: 'working' | 'debug' | 'WIP'
	) {
		this.con = globalThis.db as Db;
	}

	getName(): string {
		return this.name;
	}
	getCategory(): string {
		return this.category;
	}
	getAliases(): string[] {
		return this.aliases;
	}
	getUsage(): string {
		return this.usage ? this.usage : 'N/A';
	}
	getDescription(): string {
		return this.description;
	}
	getAccessible(): string {
		return this.accessibleby;
	}
	getSubcommands(): string[] {
		return this.Subcommands ? this.Subcommands : [];
	}
	getExamples(): string[] {
		return this.example ? this.example : [];
	}
	getBotpermissions(): string[] {
		return this.botpermissions ? this.botpermissions : [];
	}
	getUserpermissions(): string[] {
		return this.userpermissions ? this.userpermissions : [];
	}
	getGuildonly(): string | boolean {
		return this.guildOnly == false ? this.guildOnly : true;
	}
	getOwneronly(): string | boolean {
		return this.ownerOnly == false ? this.ownerOnly : true;
	}
	getNsfw(): string | boolean {
		return this.nsfw == false ? this.nsfw : true;
	}
	getCooldown(): number {
		return this.cooldown ? this.cooldown : 3000;
	}
	getStatus(): 'working' | 'debug' | 'WIP' {
		return this.status ? this.status : 'working';
	}

	abstract run(
		client: DiscordClient,
		message: Message,
		args: string[]
	): Promise<any>;
}
