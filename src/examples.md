#cURL Examples of each API

## Index

### GET /
`cURL:`
```sh
curl --location --request GET '127.0.0.1:8001' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIyIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTRmMzM5Y2I5MjcwMDFkNDVmYmE1IiwiX192IjowLCJpYXQiOjE2MDczNTYyMTEsImV4cCI6MTYwNzM1OTgxMX0.6aCOStxdMi4VWPsT6DwI3jEDg7CmPjfyHpHdUd7ww2s'
```
`Response:`
```sh
Welcome to the Workast test
```

## User

### GET /user
`cURL:`
```sh
curl --location --request GET '127.0.0.1:8001/user' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIyIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTRmMzM5Y2I5MjcwMDFkNDVmYmE1IiwiX192IjowLCJpYXQiOjE2MDczNTYyMTEsImV4cCI6MTYwNzM1OTgxMX0.6aCOStxdMi4VWPsT6DwI3jEDg7CmPjfyHpHdUd7ww2s'
```
`Response:`
```sh
{
    "msg": "This endpoint shows the info held on token",
    "name": "Cesar2",
    "avatar": "https://picsum.photos/id/237/200/300",
    "_id": "5fce4f339cb927001d45fba5",
    "__v": 0,
    "iat": 1607356211,
    "exp": 1607359811
}
```

### POST /user
`Body:`
```json
{
  "name":String, required,
  "avatar":URL, required
}
```
`cURL:`
```sh
curl --location --request POST '127.0.0.1:8001/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Cesar3",
    "avatar": "https://picsum.photos/id/237/200/300"
}'
```
`Response:`
```sh
{
    "name": "Cesar4",
    "avatar": "https://picsum.photos/id/237/200/300",
    "_id": "5fce55479cb927001d45fba7",
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXI0IiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTU1NDc5Y2I5MjcwMDFkNDVmYmE3IiwiX192IjowLCJpYXQiOjE2MDczNTc3NjcsImV4cCI6MTYwNzM2MTM2N30.vZ9mOe8jis1gOoZhIgFkj7HjzbtS16TRMgyMxdRrY2U"
}
```

## Article

### GET /article
`cURL:`
```sh
curl --location --request GET '127.0.0.1:8001/article' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIyIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTRmMzM5Y2I5MjcwMDFkNDVmYmE1IiwiX192IjowLCJpYXQiOjE2MDczNTYyMTEsImV4cCI6MTYwNzM1OTgxMX0.6aCOStxdMi4VWPsT6DwI3jEDg7CmPjfyHpHdUd7ww2s'
```
`Response:`
```sh
[
    {
        "title": "my Article",
        "text": "my Text",
        "tags": [
            "tag"
        ],
        "_id": "5fcdc7f2c975a1008774c00e",
        "userId": "5fcdc7dac975a1008774c00d",
        "__v": 0
    },
    ...
]
```

### POST /article
```json
{
  "title":String, required,
  "text":String, required,
  "tags":Array, required
}
```
`cURL:`
```sh
curl --location --request POST '127.0.0.1:8001/article' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIiLCJhdmF0YXIiOiJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM3LzIwMC8zMDAiLCJfaWQiOiI1ZmNkYzdkYWM5NzVhMTAwODc3NGMwMGQiLCJfX3YiOjAsImlhdCI6MTYwNzMyMTU2MiwiZXhwIjoxNjA3MzI1MTYyfQ.30nO7Pg3XVUhPwsjWoiikeG9HnwIoKc6HtXfzf3SZw4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "La filosofia de mi vida",
    "text": "Asi con mucho trabajo es que hemos conseguido un monton de cosas",
    "tags": ["tag", "tag1", "tag2"]
}'
```
`Response:`
```sh
{
    "title": "La filosofia de mi vida",
    "text": "Asi con mucho trabajo es que hemos conseguido un monton de cosas",
    "tags": [
        "tag",
        "tag1",
        "tag2"
    ],
    "_id": "5fcdcd20e27af000b55b741a",
    "userId": "5fcdc7dac975a1008774c00d",
    "__v": 0
}
```

### PUT /article/:articleId
`Body:`
```json
Same as POST /article but :articleId is required and all params on body are optional
```
`cURL:`
```sh
curl --location --request PUT '127.0.0.1:8001/article/5fcdcd20e27af000b55b741a' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIxIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTNhOWVjNzFhZTUwMGMzOTI3MWYzIiwiX192IjowLCJpYXQiOjE2MDczNTA5NDIsImV4cCI6MTYwNzM1NDU0Mn0.U9jjVB-2e_NL-xVGG36afg5ycnghPBnrrSdLeavsccQ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "La filosofia de mi vida",
    "text": "Asi con mucho trabajo es que hemos conseguido un monton de cosas",
    "tags": ["tag", "tag1", "tag2"]
}'
```
`Response:`
```sh
{
    "msg": "Successfully edited",
    "response": {
        "title": "La filosofia de mi vida",
        "text": "Asi con mucho trabajo es que hemos conseguido un monton de cosas",
        "tags": [
            "tag",
            "tag1",
            "tag2"
        ],
        "_id": "5fcdcd20e27af000b55b741a",
        "userId": "5fce3a9ec71ae500c39271f3",
        "__v": 0
    }
}
```

### DELETE /article/:articleId
`cURL:`
```sh
curl --location --request DELETE '127.0.0.1:8001/article/5fcdb69d13da98040004a3b7' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIiLCJhdmF0YXIiOiJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM3LzIwMC8zMDAiLCJfaWQiOiI1ZmNkYjIxZjYyMTlmOTAzNjgzYjkxZDEiLCJfX3YiOjAsImlhdCI6MTYwNzMxNTk5OSwiZXhwIjoxNjA3MzE5NTk5fQ.Q23-grF4PbqSNhxcR_km1gitxhdHAHJmwGADdbCWBL8'
```
`Response:`
```sh
{
    "msg": "Successfully deleted",
    "response": {
        "title": "my Article",
        "text": "my Text",
        "tags": [
            "tag"
        ],
        "_id": "5fcdccb5e27af000b55b7418",
        "userId": "5fcdc7dac975a1008774c00d",
        "__v": 0
    }
}
```

### GET /by-tags/:tagString
Keep in mind that the order you provide the tags to query matters, it will try to match the same order

`Example:`

If you have an article with tags `[tag1, tag2, tag3]` and you try to query by `[tag3,tag2,tag1]`
it won't work, you have you have to use the same order, or query for just one of those, in that same example
if you query for `[tag1] or [tag2] or [tag2,tag3]` will work

`cURL:`
```sh
curl --location --request GET '127.0.0.1:8001/article/by-tags/tag,tag1' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIyIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTRmMzM5Y2I5MjcwMDFkNDVmYmE1IiwiX192IjowLCJpYXQiOjE2MDczNTYyMTEsImV4cCI6MTYwNzM1OTgxMX0.6aCOStxdMi4VWPsT6DwI3jEDg7CmPjfyHpHdUd7ww2s'
```
`Response:`
```sh
[
    {
        "title": "La filosofia de mi vida",
        "text": "Asi con mucho trabajo es que hemos conseguido un monton de cosas",
        "tags": [
            "tag",
            "tag1",
            "tag2"
        ],
        "_id": "5fcdcd20e27af000b55b741a",
        "userId": "5fce3a9ec71ae500c39271f3",
        "__v": 0
    }
]
```
