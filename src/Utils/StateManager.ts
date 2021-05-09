import { EventEmitter } from 'events';
import connection from '../../Database/DB';
import { Db } from 'mongodb';

function getConnection() {
	let client: Db;
	connection().then((con) => {
		client = con.db();
	});
	return client;
}

class StateManager extends EventEmitter {
	db: Db;
	constructor(opts?: object) {
		super(opts);
		this.db = getConnection();
	}
}

export = new StateManager();
