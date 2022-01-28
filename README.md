# 2022 sw 운영보조원 과제 - To-Do-List
이진원, 오지우, 송수영
# api
* (post) localhost:port/todolist 할일목록 가져오기
    * 응답 예
   {
	"success": true,
	"status": 200,
	"message": "OK",
	"data": [
		{
			"_id": "61f2a7b63346abe102695a30",
			"text": "1234",
			"done": false,
			"__v": 0
		},
		{
			"_id": "61f2a846e2c3990e83a5e7ee",
			"text": "1234",
			"done": false,
			"__v": 0
		}
    ]
   }