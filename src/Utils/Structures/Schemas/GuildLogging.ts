import mongoose, { model, Schema } from 'mongoose';

const GuildLoggingSchema = new Schema({
	guildId: {
		type: mongoose.SchemaTypes.String,
		required: true,
		unique: true,
	},
	modLogId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	memberLogId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	publicModLogId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	roleLogId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	appealsId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	reportsId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	actionLogId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
	suggestionsId: {
		type: mongoose.SchemaTypes.String,
		default: null,
	},
});

export = model('GuildLogging', GuildLoggingSchema);
