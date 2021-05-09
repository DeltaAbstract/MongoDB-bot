import BaseEvent from '../../Utils/Structures/BaseEvent';
import DiscordClient from '../../Client/Client';

export default class ReadyEvent extends BaseEvent {
	constructor() {
		super('ready');
	}
	async run(client: DiscordClient) {
		console.log(`✅ | ${client.user.tag} has logged in!`);

		let status = `${client.guilds.cache.size} server(s) | ${client.users.cache.size} user(s)`;

		client.user.setPresence({
			activity: { name: status, type: 'WATCHING' },
			status: 'dnd',
		});
	}
}
