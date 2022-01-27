const todolist=require('../schemas/todolist');
const asyncHandler = require('express-async-handler');

const showlist = asyncHandler(async (req, res) => {
    const test1=new todolist({text:"1234" ,done:false});
    const test2=new todolist({text:"4321" ,done:false});
    test1.save();
    test2.save();

    const list= await todolist.find();
    res.json(list);
});

exports.showlist=showlist;