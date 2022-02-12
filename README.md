# 2022 sw 운영보조원 과제 - To-Do-List
이진원, 오지우, 송수영
# api
할일목록 가져오기
* (get) localhost:port/
    * 요청
    
    |body| 예 |
    |---|---|

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
* (post) localhost:port/
    * 요청

    |body| 예 |
    |---|---|
    |text|할일내용|

    * 응답 예

    ```json
    {
        "success": true,
        "status": 200,
        "message": "OK",
        "data": {
            "text": "hi",
            "done": false,
            "_id": "6207825948bca0d5f3ab2ee8",
            "__v": 0
        }
    }
    ```


할일 삭제하기
* (delete) localhost:port/:id
    * 요청

    |body| 예 |
    |---|---|

    * 응답 예

    ```json
    {
        "success": true,
        "status": 200,
        "message": "OK",
        "data": {
            "deletedCount": 1
        }
    }
    ```


할일 완료여부수정
* (put) localhost:port/:id
    * 요청

    |body| 예 |
    |---|---|
    |done|todo의 done|
    
    * 응답 예

    ```json
    {
        "success": true,
        "status": 200,
        "message": "OK",
        "data": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    }
    ```


완료된 항목 전체 삭제
* (delete) localhost:port/
    * 요청

    |body| 예 |
    |---|---|
    
    * 응답 예

    ```json
    {
        "success": true,
        "status": 200,
        "message": "OK",
        "data": {
            "deletedCount": 0
        }
    }
    ```