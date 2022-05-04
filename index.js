const express = require('express');

const app = express();

app.get('/', (_req, res) => {
	res.status(200).json({
		name: 'Joh Doe',
	});
});

app.get('/hello', (_req, res) => {
	res.status(200).send("<h1 color='white' background-color='blue'>Hello World</h1>");
});

app.listen(5000, () => {
	console.log('Server is listening');
});
