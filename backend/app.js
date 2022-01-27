const express = require("express");
const routes = require("./routes/todolist");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened: true}));

app.listen(3000, function () {
  console.log("Connected port 3000!")
})

module.exports=app;