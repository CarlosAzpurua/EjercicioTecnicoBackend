const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 3,
			max: 150,
		},
		lastName: {
			type: String,
			required: true,
			min: 3,
			max: 150,
		},
		username: {
			type: String,
			required: true,
			max: 200,
			min: 11,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			max: 1024,
			min: 6,
		},
		currency: {
			type: String,
			default: 'usd',
		},
		sort: {
			type: String,
			default: 'desc',
		},
		limit: {
			type: Number,
			default: 25,
			max: 25,
			min: 1,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

module.exports = User = mongoose.model('User', userSchema);
