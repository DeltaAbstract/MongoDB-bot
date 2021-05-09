import DiscordClient from '../../Client/Client';

export default abstract class BaseEvent {
	// Misc props
	constructor(private name: string) {}

	getName(): string {
		return this.name;
	}

	abstract run(client: DiscordClient, ...args: any[]): Promise<any>;
}
