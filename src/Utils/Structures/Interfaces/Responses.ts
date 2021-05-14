namespace Responses {
	export interface BaseObjError {
		error: boolean;
		type?: string;
		message?: string;
	}
	export interface BaseObjOpts {
		error: boolean | BaseObjError;
		file?: string;
		text?: string;
		id?: number | string;
		author?: string;
		title?: string;
		link?: string;
		misc?: object;
	}
}

export = Responses;
