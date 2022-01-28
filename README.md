# 2022 sw 운영보조원 과제 - To-Do-List
이진원, 오지우, 송수영
# api
* (get) localhost:port/todolist 할일목록 가져오기
    * 응답 예
    ```json
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
   ```

* (post) localhost:port/addtodo 할일 추가하기
    * 요청

    |body| 예 |
    |---|---|
    |test|할일내용|

* (post) localhost:port/deltodo 할일 삭제하기
    * 요청

    |body| 예 |
    |---|---|
    |test|할일내용|