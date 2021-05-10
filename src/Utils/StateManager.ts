import connection from '../../Database/DB';
import { EventEmitter } from 'events';
import { Db, MongoClient } from 'mongodb';

class StateManager extends EventEmitter {
	db: any;
	constructor(options?: object) {
		super(options);
	}
}

export = new StateManager();
