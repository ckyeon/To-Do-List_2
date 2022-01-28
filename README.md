# 2022 sw 운영보조원 과제 - To-Do-List
이진원, 오지우, 송수영
# api
할일목록 가져오기
* (get) localhost:port/todolist
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


할일 추가하기
* (post) localhost:port/addtodo
    * 요청

    |body| 예 |
    |---|---|
    |test|할일내용|


할일 삭제하기
* (post) localhost:port/deltodo
    * 요청

    |body| 예 |
    |---|---|
    |id|todo의 id|


할일 완료여부수정
* (post) localhost:port/updatetodo
    * 요청

    |body| 예 |
    |---|---|
    |id|todo의 id|
	|done|todo의 done|