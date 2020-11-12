const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
	const token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided' });

	const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_WOLOX);
	req.userId = decoded.id;
	next();
}

module.exports = verifyToken;
