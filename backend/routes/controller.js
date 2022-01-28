const todolist=require('../schemas/todolist');
const asyncHandler = require('express-async-handler');
const { createResponse } = require('../utils/response');

const showlist = asyncHandler(async (req, res) => {
    const list= await todolist.find();
    res.json(createResponse(res, list));
});

exports.showlist=showlist;