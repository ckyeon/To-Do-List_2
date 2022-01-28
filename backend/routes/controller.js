const todolist=require('../schemas/todolist');
const asyncHandler = require('express-async-handler');

const showlist = asyncHandler(async (req, res) => {
    const list= await todolist.find();
    res.json(list);
});

exports.showlist=showlist;