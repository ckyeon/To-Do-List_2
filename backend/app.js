var express = require("express");
var bodyparser = require("body-parser");
var router = require("./router/todolist");

var app = express();
var urlencodedParser=bodyparser.urlencoded({extened: false});

app.use("router");

app.listen(3000, function () {
  console.log("Connected port 3000!")
})

model.exports=app;