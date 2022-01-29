const { todolist }=require('../models/index');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showList = asyncHandler(async (req, res) => {
    const list= await todolist.find();

    res.json(createResponse(res, list));
});

const addTodo = asyncHandler(async (req, res) => {
    await todolist.create({ text: req.body.text });

    res.redirect("/");
});

const delTodo = asyncHandler(async (req, res) => {
    await todolist.deleteOne({ id: req.body.id });

    res.redirect("/");
});

const updateTodo = asyncHandler(async (req, res) => {
    if(req.body.done==false)
        await todolist.updateOne({ id: req.body.id }, { done: true});
    else
        await todolist.updateOne({ id: req.body.id }, { done: false});

    res.redirect("/");
});

const updateAll = asyncHandler(async (req, res) => {
        await todolist.updateMany({}, { $set: { done: true }});

    res.redirect("/");
});


exports.showlist=showList;
exports.addtodo=addTodo;
exports.deltodo=delTodo;
exports.updatetodo=updateTodo;
exports.updateall=updateAll;