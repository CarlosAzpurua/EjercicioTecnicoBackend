const router = require('express').Router();
const User = require('../model/user');
const verifyToken = require('../utils/verifytoken');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
	const { name, lastName, username, password, currency } = req.body;

	try {
		if (name || lastName || username || password)
			return res.json({
				alert: 'Disculpe debe completar los datos para culminar el proceso de registro',
			});

		// Data
		// Creating a new User
		const user = new User({
			name,
			lastName,
			username,
			password,
			currency,
		});
		user.password = await user.encryptPassword(password);
		await user.save();
		// Create a Token
		const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_WOLOX, {
			expiresIn: 60 * 60 * 24, // expires in 24 hours
		});

		res.json({ auth: true, token, name });
	} catch (e) {
		console.log(e);
		res.status(500).send('There was a problem registering your user');
	}
});

router.get('/me/:userId', verifyToken, async (req, res) => {
	const user = await User.findById(req.userId, {
		password: 0,
		lastName: 0,
	});
	if (!user) return res.status(403).send('No user to found.');
	return res.status(200).json(user);
});

router.post('/up/preferences', async (req, res) => {
	const { preferences, username } = req.body;

	const editUser = await User.findOneAndUpdate(
		{ username: username },
		{ currency: preferences.currency, sort: preferences.sort, limit: preferences.limit }
	);
	if (!editUser) return res.json({ alert: 'error' }).status(401);
	return res.json(preferences);
});

router.post('/signin', async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username: username });
	if (!user) return res.status(403).send("The username doesn't exists");

	const validPassword = await user.comparePassword(password, user.password);

	if (!validPassword) return res.status(401).send({ auth: false, token: null });

	const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_WOLOX, {
		expiresIn: 60 * 60 * 24,
	});
	return res.status(200).json({ auth: true, token, name });
});

router.get('/logout', function (req, res) {
	return res.status(200).send({ auth: false, token: null, name: '' });
});

module.exports = router;
