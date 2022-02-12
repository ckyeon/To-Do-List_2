const router = require('express').Router();
const controller=require('./controller');

//할일목록 가져오기
//router.get('/todolist', controller.showlist);
router.get('/', controller.showList)

//할일 추가
//router.post('/addtodo', controller.addtodo);
router.post('/',controller.addTodo)

//할일 삭제
//router.post('/deltodo', controller.deltodo);
router.delete('/:id', controller.deleteTodo)

//할일 완료여부수정
//router.post('/updatetodo', controller.updatetodo);
router.put("/:id", controller.updateTodo)

//할일 전부완료
// router.put('/', controller.updateAll);

//완료된 할일 삭제
router.delete('/', controller.deleteDone)


module.exports=router;