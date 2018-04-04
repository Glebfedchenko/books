const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/wt');

const bookRoutes = require('./api/routes/books');
const collectionRoutes = require('./api/routes/collections');

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);  
app.use('/api/collections', collectionRoutes);

app.listen(port, console.log(`App running at ${port}`));