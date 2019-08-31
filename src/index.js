const Express = require('express');
const BodyParser = require('body-parser');

const app = Express();
app.use(BodyParser.json());

app.route('/ping')
	.get((res, req) => req.send('pong'));

app.listen(8080, () => {
	console.log('Server initialized.');
});
