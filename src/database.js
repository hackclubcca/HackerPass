const MONGO_URL = 'mongodb://test:' + process.env.PASSWORD + '@ds131139.mlab.com:31139';
const MongoClient = require('mongodb').MongoClient;

// Connection URL

// Database Name
const dbName = 'hack-registration';
var database;

function connect() {
    MongoClient.connect(MONGO_URL, function (err, client) {
        console.log("Connected successfully to server");
        if (err) {
            console.error('An error occurred connecting to MongoDB: ', err);
        }
        database = client.db(dbName).admin();

        client.close();
    });
}
function Push(data) {
    if (database == null) connect();
    database.collection("entries").insertOne(data);
}