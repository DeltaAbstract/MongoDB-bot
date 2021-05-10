import DiscordClient from '../../Client/Client';
import StateManager from '../StateManager';
import { Db } from 'mongodb';

export default abstract class BaseEvent {
	// Misc props
	con: Db;
	constructor(private name: string) {
		this.con = StateManager.con;
	}

	getName(): string {
		return this.name;
	}

	abstract run(client: DiscordClient, ...args: any[]): Promise<any>;
}
