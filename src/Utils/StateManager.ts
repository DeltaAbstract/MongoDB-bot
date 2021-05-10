import connection from '../../Database/DB';
import { EventEmitter } from 'events';
import { Db, MongoClient } from 'mongodb';

class StateManager extends EventEmitter {
	con: Db;
	constructor(options?: object) {
		super(options);
		this.con = connection();
	}
}

export = new StateManager();
