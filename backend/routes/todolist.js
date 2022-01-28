const router = require('express').Router();
const controller=require('./controller');

//메인 페이지
router.get('/todolist', controller.showlist);

//할일 추가
router.post('/addtodo', controller.addtodo);


module.exports=router;