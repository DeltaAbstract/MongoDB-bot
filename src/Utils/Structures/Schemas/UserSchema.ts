import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	username: mongoose.SchemaTypes.String,
	discordId: {
		type: mongoose.SchemaTypes.String,
		required: true,
	},
});

export = mongoose.model('User', UserSchema);
