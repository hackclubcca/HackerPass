const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var cors = require('cors');
require('dotenv').config();

const API_PORT = 3000;
const app = express();
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(path.join(__dirname, '../build')));

const router = express.Router();


let MONGO_URL = process.env.MONGO_URL;
const MongoClient = require('mongodb').MongoClient;
// Connection url
// Database Name
// Connect using MongoClient
function addData(data) {
    console.log("Adding data...");
    MongoClient.connect(MONGO_URL, function (err, client) {
        if (err)
            console.log(err);
        // Use the admin database for the operation
        let db = client.db('hack-registration');
        // List all the available databases
        db.collection('entries').insert(data, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        client.close();
    });
}



// checks if connection with the database is successful




router.post('/data', (req, res) => {
    addData(req.body);
    return res.send(200)
});

router.get('/', (req, res) => {
    console.log("Hello");
    res.sendFile(path.join(__dirname, 'build', '../index.html'));
});

app.use('/', router);
app.listen(process.env.PORT, () => console.log(`LISTENING ON -PORT ${process.env.PORT}`));
