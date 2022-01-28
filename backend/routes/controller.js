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
    await todolist.deleteOne({ id: req.body.id });

    res.redirect("/todolist");
});

const updatetodo = asyncHandler(async (req, res) => {
    if(req.body.done==false)
        await todolist.updateOne({ id: req.body.id }, { done: true});
    else
        await todolist.updateOne({ id: req.body.id }, { done: false});

    res.redirect("/todolist");
});

const updateall = asyncHandler(async (req, res) => {
        await todolist.updateMany({}, { $set: { done: true }});

    res.redirect("/todolist");
});


exports.showlist=showlist;
exports.addtodo=addtodo;
exports.deltodo=deltodo;
exports.updatetodo=updatetodo;
exports.updateall=updateall;