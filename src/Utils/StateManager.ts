import { EventEmitter } from 'events';
import connection from '../../Database/DB';
import { Db } from 'mongodb';

class StateManager extends EventEmitter {
	db: Db;
	constructor(opts?: object) {
		super(opts);
		connection()
			.then((c) => {
				this.db = c.db();
			})
			.catch((err) => console.log(err));
	}
}

export = StateManager;
