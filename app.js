const { MongoClient } = require('mongodb');

const express = require('express');
const app = express();
app.use(express.json());

const { routeUser } = require('./routes/user');
const { routeBroker } = require('./routes/broker');
const { routeRent } = require('./routes/rent');

app.use('/user', routeUser);
app.use('/brocker', routeBroker);
app.use('/rent', routeRent);

const uri = `mongodb://127.0.0.1:27017/new`;
const client = new MongoClient(uri);

let port = process.env.PORT || 3000;
app.listen(port,
    () => console.log('\x1b[36m', `listening on ${port}`)
);

module.exports = { client };