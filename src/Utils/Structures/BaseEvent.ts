import DiscordClient from '../../Client/Client';
import StateManger from '../StateManager';

export default abstract class BaseEvent {
	// Misc props
	db = StateManger.db;
	constructor(private name: string) {}

	getName(): string {
		return this.name;
	}

	abstract run(client: DiscordClient, ...args: any[]): Promise<any>;
}
