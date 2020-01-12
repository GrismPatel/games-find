const express = require('express');
const bodyParser = require('body-parser');
const search_endpoint = require('./endpoints/search');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/search')
.post(search_endpoint.get_games)

app.listen(9000, () => {
    console.log('Listening...')
})