const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todolist = new Schema({
    todo: String,
    complete: {type: Boolean, default: false}
})

module.exports=mongoose.model('Todolist', Todolist);