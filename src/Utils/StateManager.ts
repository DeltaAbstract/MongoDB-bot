import { EventEmitter } from 'events';
import connection from '../../Database/DB';
import { Db } from 'mongodb';

class StateManager extends EventEmitter {
	db: Db;
	constructor(opts?: object) {
		super(opts);
		const MongoClient = connection();
		this.db = MongoClient.db();
	}
}

export = new StateManager();
