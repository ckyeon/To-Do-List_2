const express = require("express");
const routes = require("./routes/todolist");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_MAIN_DB_URL);
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

app.use(express.json());
app.use(routes);

module.exports=app;