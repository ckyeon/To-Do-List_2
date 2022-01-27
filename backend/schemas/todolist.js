const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodolistSchema = new mongoose.Schema({
    text: String,
    done: {type: Boolean, default: false}
});

module.exports=mongoose.model('todolist', TodolistSchema);