import mongoose, { model, Schema } from 'mongoose';

const GuildSchema = new Schema({
	guildId: {
		type: mongoose.SchemaTypes.String,
		required: true,
		unique: true,
	},
	prefix: {
		type: mongoose.SchemaTypes.String,
		default: '?',
	},
	lang: {
		type: mongoose.SchemaTypes.String,
		default: 'en',
	},
});

export = model('Guild', GuildSchema);
