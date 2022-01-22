var express = require("express")
var app = express()

const path = require('path')


app.use(
    "/node_modules",
    express.static(path.join(__dirname, "../node_modules"))
  )
app.get("/", function (req, res) {
  res.send("Hello World!")
})


app.listen(3000, function () {
  console.log("Example app listening on port 3000!")
})