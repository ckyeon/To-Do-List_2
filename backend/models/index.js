const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_MAIN_DB_URL);
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

const TodolistSchema = new mongoose.Schema({
    text: String,
    done: {type: Boolean, default: false}
});
exports.todolist = db.model("todolist", TodolistSchema);