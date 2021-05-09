import { EventEmitter } from 'events';
import connection from '../../Database/DB';
import { Db } from 'mongodb';

class StateManager extends EventEmitter {
	db: Db;
	constructor(opts?: object) {
		super(opts);
		connection()
			.then((client) => {
				this.db = client.db();
				console.log(this.db);
			})
			.catch((err: Error) => {
				console.log(err);
			});
	}
}

export = new StateManager();
