const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
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





router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', '../index.html'));
});

router.post('/data', (req, res) => {
    addData(req.body);
    return res.send(200)
});;

app.use('/', router);
app.listen(process.env.PORT || 5000, () => console.log(`LISTENING ON -PORT ${process.env.PORT}`));