var express = require("express")
const { model } = require("mongoose")
var app = express()

const path = require('path')


app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")))

app.get("/", function (req, res) {
  res.send("Hello World!")
})


app.listen(3000, function () {
  console.log("port 3000!")
})

model.exports=app;