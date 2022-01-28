const todolist=require('../schemas/todolist');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showlist = asyncHandler(async (req, res) => {
    const list= await todolist.find();
    res.json(createResponse(res, list));
});

const addtodo = asyncHandler(async (req, res) => {
    console.log(req.body);
    const newtodo=await todolist.create({ text: req.body.text, done: req.body.done });

    //res.json(createResponse(res, newtodo));
    res.redirect("/todolist");
});

exports.showlist=showlist;
exports.addtodo=addtodo;