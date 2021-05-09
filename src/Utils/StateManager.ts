import { EventEmitter } from 'events';
import connection from '../../Database/DB';
import { Db } from 'mongodb';

class StateManager extends EventEmitter {
	db: Db;
	constructor(opts?: object) {
		super(opts);
	}
	async getConnection() {
		const client = await connection();
		this.db = client.db();
		return this;
	}
}

export = new StateManager();
