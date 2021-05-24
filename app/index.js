const express = require('express');
const TinEye = require('tineye-api');
const { PUBLIC_KEY, PRIVATE_KEY } = require('./config');
const TinEyeApi = new TinEye(
	'https://api.tineye.com/rest/',
	PUBLIC_KEY,
	PRIVATE_KEY
);

const app = express();

const searchRoute = express.Router();
searchRoute.get('/', (req, res, next) => {
	const url = 'https://tineye.com/images/meloncat.jpg';
	const params = {
		offset: 0,
		limit: 10,
		sort: 'score',
		order: 'desc',
	};

	tineyeApi.sear;
});

app.use(searchRoute);

app.listen(34343, () => console.log('server ready to accept upload'));
