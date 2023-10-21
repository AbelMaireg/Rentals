const { MongoClient } = require('mongodb');

const uri = `mongodb://127.0.0.1:27017/new`;
const client = new MongoClient(uri);

try {
    client.connect()
        .then(() => console.log('connected'))
        .catch(() => console.log('failed'))
} catch (e) {
    console.log(e);
} finally {
    client.close();
    console.log('done');
}

const a = 1;

module.exports = { client };
