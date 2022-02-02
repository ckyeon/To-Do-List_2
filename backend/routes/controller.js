const { todolist }=require('../models/index');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showList = asyncHandler(async (req, res) => {
  const { query } = req;
  const list = await todolist.find(query);

  res.json(createResponse(res, list));
});

const addTodo = asyncHandler(async (req, res) => {
  const { body } = req;
  const todo = await todolist.create(body);

  res.json(createResponse(res, todo));
});

const deleteTodo = asyncHandler(async (req, res) => {
    //await todolist.deleteOne({ id: req.body.id });
  const {params: {id: _id}} = req;
  await todolist.deleteOne({_id});
  res.json(createResponse(res));
});

const updateTodo = asyncHandler(async (req, res) => {   
    //await todolist.updateOne({ id: req.body.id }, { done: req.body.done })
  const {params: {id:_id}, body: $set} = req;
  const updatedTodo = await todolist.updateOne({_id}, $set);
  res.json(createResponse(res, updatedTodo));
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