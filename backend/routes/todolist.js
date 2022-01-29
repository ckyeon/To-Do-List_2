const router = require('express').Router();
const controller=require('./controller');

//메인 페이지
//router.get('/todolist', controller.showlist);
router.get('/', controller.showlist)

//할일 추가
//router.post('/addtodo', controller.addtodo);
router.post('/',controller.addtodo)

//할일 삭제
//router.post('/deltodo', controller.deltodo);
router.delete('/:id', controller.deltodo)

//할일 완료여부수정
//router.post('/updatetodo', controller.updatetodo);
router.put("/:id", controller.updatetodo)

//할일 전부완료
router.get('/updateall', controller.updateall);


module.exports=router;