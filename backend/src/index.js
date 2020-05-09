const express = require('express');
const bodypParser = require('body-parser');

const app = express();
var cors = require('cors');


app.use(bodypParser.json()); 
app.use(bodypParser.urlencoded({ extended: false}));
app.use(cors());


app.get('/', (req, res) => {
    res.send('funfou')
})

require('./app/controllers/index')(app);

app.listen(8080);
