var express = require("express");
var bodyparser = require("body-parser");
var router = require("./router/todolist");

var app = express();

app.use(router);
app.use(express.urlencoded({extened: true}))

app.listen(3000, function () {
  console.log("Connected port 3000!")
})

model.exports=app;