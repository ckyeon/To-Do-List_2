var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Todolist');

var db = mongoose.connection;

db.on('error', function(){
    console.log('Connection Failed!');
});

db.once('open', function() {
    console.log('Connected!');
});

const todolist= new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})
