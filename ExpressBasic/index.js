let MongoHelper = require('./util/helper/MongoHelper');
const express = require('express');

const app = express();
const bodyParser = require('body-parser')

// Basic routing:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
MongoHelper.connect();
let indexRoute = require('./routes/index');


// // #1 Just return a text
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// // #2 Return a json object
// app.get('/json', (req, res) => {
//     res.json({message : 'JSON DATA'})
// });

// // #3 Get routing with param
// app.get('/json/:id/:name', (req, res) => {
//     let id = req.params['id'] + ' __ ' + req.param.name;
//     res.send('Hello ' + id);
// });

// // #4 Post routing to server
// app.post('/add-product', (req, res) => {
//     let data = req.body;
//     console.log(data);
//     res.json(data);
// });

app.use('/', indexRoute);



app.listen(9090, () => {
    console.log('Server is running...');
})