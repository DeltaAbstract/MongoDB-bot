import DiscordClient from '../../Client/Client';
import { Db } from 'mongodb';

export default abstract class BaseEvent {
	// Misc props
	con: Db;
	constructor(private name: string) {
		this.con = globalThis.db as Db;
	}

	getName(): string {
		return this.name;
	}

	abstract run(client: DiscordClient, ...args: any[]): Promise<any>;
}
