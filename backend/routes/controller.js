const { todolist }=require('../models/index');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showList = asyncHandler(async (req, res) => {
    const list= await todolist.find(req.query);

    res.json(createResponse(res, list));
});

const addTodo = asyncHandler(async (req, res) => {
    await todolist.create(req.body);

    res.json(createResponse(res, ''));
});

const deleteTodo = asyncHandler(async (req, res) => {
    //await todolist.deleteOne({ id: req.body.id });
    const {params: {id}} = req;
    await todolist.deleteOne({_id:id});

    res.json(createResponse(res, ''));
});

const updateTodo = asyncHandler(async (req, res) => {   
    //await todolist.updateOne({ id: req.body.id }, { done: req.body.done })
    const {params: {id}} = req;
    await todolist.updateOne({_id:id}, req.body);
    
    res.json(createResponse(res, ''));
});

// const updateAll = asyncHandler(async (req, res) => {
//     await todolist.updateMany({}, { $set: { done: true }});

//     res.json(createResponse(res, ''));
// });


exports.showList=showList;
exports.addTodo=addTodo;
exports.deleteTodo=deleteTodo;
exports.updateTodo=updateTodo;
//exports.updateAll=updateAll;