const router = require('express').Router();
const controller=require('./controller');
const Todolist = require('../schemas/todolist');

//todolist page
router.post('/todolist', controller.showlist);


module.exports=router;