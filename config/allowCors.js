// const allowedOrigin = require('./allowOrigins')


const allowedOrigin = [
	'http://localhost:3000/',
	'http://127.0.0.1:5173/',
	'https://www.google.com',
];

const allowedCors = {
	origin: (origin, callback) => {
		if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by cors'));
		}
	},
	Credentials: true,
	optionsSuccessStatus: 200,
};

module.exports = allowedCors;
