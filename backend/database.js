const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	},
	function (err, res) {
		if (err)
			return console.log(err, 'Unable to connect to the server. check database.js');
		return console.log('Database is connected');
	}
);

module.exports = mongoose;
