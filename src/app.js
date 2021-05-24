const express = require('express');
const serverless = require('serverless-http')
const TinEye = require('tineye-api');
const PRIVATE_KEY = '6mm60lsCNIB,FwOWjJqA80QZHh9BMwc-ber4u=t^';
const PUBLIC_KEY = 'LCkn,2K7osVwkX95K4Oy';

const TinEyeApi = new TinEye(
	'https://api.tineye.com/rest/',
	PUBLIC_KEY,
	PRIVATE_KEY
);

const app = express();

const searchRoute = express.Router();
searchRoute.get('/', async (req, res, next) => {
	const url = 'https://firebasestorage.googleapis.com/v0/b/fir-study-98929.appspot.com/o/standList%2Ftesla_stand.jpg?alt=media&token=66abb808-9fca-41cf-8f33-ce949aad3918';
	const params = {
		offset: 0,
		limit: 10,
		sort: 'score',
		order: 'desc',
	};

  try {
    const result = await TinEyeApi.searchUrl(url, params)
    res.json({ success: true, result });
  } catch (err) {
    res.json({ success: false, err });
  }
});

app.use('/.netlify/functions/app', searchRoute);

module.exports.handler = serverless(app)