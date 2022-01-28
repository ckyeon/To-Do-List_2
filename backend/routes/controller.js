const todolist=require('../schemas/todolist');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showlist = asyncHandler(async (req, res) => {
    const list= await todolist.find();

    res.json(createResponse(res, list));
});

const addtodo = asyncHandler(async (req, res) => {
    await todolist.create({ text: req.body.text });

    res.redirect("/todolist");
});

const deltodo = asyncHandler(async (req, res) => {
    await todolist.deleteOne({ text: req.body.text });

    res.redirect("/todolist");
});

exports.showlist=showlist;
exports.addtodo=addtodo;
exports.deltodo=deltodo;