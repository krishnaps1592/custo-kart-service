const express = require('express')
const bodyParser = require('body-parser')
const mongo = require('mongodb');

const customerRouter  = require('./routes/customer');
var mongoClient = mongo.MongoClient;
const app = express();
const mongoUrl = "mongodb://localhost:27017/customer"
const dataSet = [{
        name: "Test",
        age: 24
    },
    {
        name: "Kishna",
        age: 29,
        City: 'coimbatore'
    }
]


var database;
mongoClient.connect(mongoUrl, function (error, client) {
    if (error) {
        process.exit(1);
    }

    database = client.db("customer")

    app.listen('3000', function () {
        console.log('app and db started')
    });
})

app.use(bodyParser.json())
app.use('/customers',customerRouter)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send('sample api')
})
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.post('/customers', (req, res) => {
//     console.log(req.body)
//     database.collection("customer-info").insertOne(req.body, function (err, doc) {
//         if (err) {
//             manageError(res, err.message, "Failed to create new product.");
//         } else {
//             res.status(201).json(req.body);
//         }
//     });
// })

// app.get('/customers', (req, res) => {
//     database.collection("customer-info").find({}).toArray(function (error, data) {
//         if (error) {
//             manageError(res, error.message, "Fetch all failed")
//         } else {
//             res.status(200).json(data)
//         }
//     })
// })

function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({
        "error": message
    });
}