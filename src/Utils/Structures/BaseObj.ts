import Responses from './Interfaces/Responses';

export default class Baseobj {
	error: boolean;
	error_type: string | null;
	error_message: string | null;
	file: string | null;
	text: string | null;
	id: string | number | null;
	author: string | null;
	title: string | null;
	link: string | null;
	vars: object;
	constructor(opts: Responses.BaseObjOpts) {
		this.error = typeof opts.error == 'object' ? opts.error.error : opts.error;
		this.error_type = typeof opts.error == 'object' ? opts.error.type : null;
		this.error_message =
			typeof opts.error == 'object' ? opts.error.message : null;
		this.file = opts.file ? opts.file : null;
		this.text = opts.text ? opts.text : null;
		this.id = opts.id ? opts.id : null;
		this.author = opts.author ? opts.author : null;
		this.title = opts.title ? opts.title : null;
		this.link = opts.link ? opts.link : null;
		this.vars = opts.misc ? opts.misc : null;
	}
}
