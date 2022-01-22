var express = require("express")
var app = express()

const todoRouter = require('./routes')

app.use('/todolists', todoRouter);


app.listen(3000, function () {
  console.log("port 3000!")
})