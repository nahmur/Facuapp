const express = require('express');
const app = express();
const router = require("./routes");
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://dev:dev2019@clustertest-imp38.mongodb.net/citiesdb?retryWrites=true&w=majority";
const mongoose = require('mongoose', { useNewUrlParser: true, useUnifiedTopology: true });
const bodyParser = require('body-parser').json();
const cors = require('cors');

//Database conenction
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Middleware
app.use(cors());
app.use(bodyParser);
app.use('/', router);

//Star server
app.listen(port);