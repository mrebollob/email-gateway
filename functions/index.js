const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {

    let responseData = {
        "email": req.body,
        "hola": "hola"
    }

    res.status(201).json(responseData);
});

exports.email = functions.https.onRequest(app);