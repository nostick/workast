<!-- PROJECT LOGO -->
<br />
<p align="center">
    <h3 align="center">Workast API Test</h3>

  <p align="center">
    This is the implementtion of Workast API Slack Integration for recruitment process
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
<li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This application should allow you to do the next things:

* Create a dummy user and get a random token
* CRUD Articles
* Post messages into #general channel in Slack
* Keep records on Mongo of Articles and Users

### Built With

* [Nodejs](https://nodejs.org/)
* [Mongo](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

In order to start you first need to verify that you have installed `docker` and `docker-compose`
you can easily verify it by opening your shell and type this:

* docker
  ```sh
  $ docker -v
  Docker version 19.03.13, build 4484c46d9d -> You should get something like this output
  ```

* docker-compose
  ```sh
  $ docker-compose -v
  docker-compose version 1.27.4, build 40524192 -> You should get something like this output
  ```

If you got those outputs then you are good to go

### Installation

1. Clone the repo
   ```sh
   $git clone https://github.com/nostick/workast.git
   ```
2. Move to that folder you just cloned
   ```sh
   $cd workast
   ```
3. Create your own `.env` file
   ```sh
   $cp .env.example .env
   ```
4. Edit the new file `.env` you just copied adding the values that you want to use
   ```JS
    MONGO_USERNAME=<random_username>
    MONGO_PASSWORD=<random_password>
    MONGO_ROOT_USERNAME=<root_username>
    MONGO_ROOT_PASSWORD=<root_password>
    MONGO_PORT=27017
    MONGO_DB=<db_name>
    AUTH_TOKEN=<secret_key>
    SLACK_TOKEN=<slack_token>
   ```
Keep in mind that `<secret_key>` can be whatever string you want, it will work as a SECRET_KEY for generating the JWT token.

My app is agnostic to the .env vars because this should be loaded by a secret manager
like `Vault` or `AWS SM`

The `<slack_token>` should be provided by you, in order to make it work with your own slack workspace, 
if you want i can add you to mine and use my token, so you'll see it working on my workspace

5.) Building and setting up
   ```sh
   $docker-compose up -d --build
   ```

6.) Verifying that everything is up and running
   ```sh
   $docker ps
   CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS                    PORTS                      NAMES
8880d45c586b        workast:current-alpine   "docker-entrypoint.s…"   10 hours ago        Up 14 seconds             0.0.0.0:8001->8001/tcp     app
5b7f79f0f4cd        mongo:4.4.2              "docker-entrypoint.s…"   10 hours ago        Up 20 seconds (healthy)   0.0.0.0:27017->27017/tcp   mongo
   ```
if you see something like that after running `docker ps` then that means you are good to go!



<!-- USAGE EXAMPLES -->
## Usage

This is a RESTful API, you will need to be able to run `cURL` commands or use postman as well
or some way to make http request to the server,

The app runs by default on port `8001` and uses the `localhost` so you can either use `127.0.0.1` or `localhost` as host

1.) Get a new token
```sh
curl --location --request POST '127.0.0.1:8001/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Cesar1",
    "avatar": "https://picsum.photos/id/237/200/300"
}'
```
this will create a record on mongo db and give you a token that is required for all subsequent calls 
you could do on the app, since every request requires for a header `x-auth-token`

if everything goes well with that `cURL` then you should probably get a response like this:
```json
{
  "name": "Cesar1",
  "avatar": "https://picsum.photos/id/237/200/300",
  "_id": "5fce3a9ec71ae500c39271f3",
  "__v": 0,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2VzYXIxIiwiYXZhdGFyIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwIiwiX2lkIjoiNWZjZTNhOWVjNzFhZTUwMGMzOTI3MWYzIiwiX192IjowLCJpYXQiOjE2MDczNTA5NDIsImV4cCI6MTYwNzM1NDU0Mn0.U9jjVB-2e_NL-xVGG36afg5ycnghPBnrrSdLeavsccQ"
}
```

So basically that's it, once you got the token you are good to use the other endpoints that are
available on the app.

In order to see what others endpoints are available on the app read Endpoints on this Readme

I'll provide another readme with a `cURL` for all operations on that section

<!-- Endpoints -->
## Endpoints

Remember that all this endpoints require the `x-auth-token` Header

GET `{{host}}` -> Greets you

GET `{{host}}/user` -> Shows you the info held on token

POST `{{host}}/user` -> Create a new user

GET `{{host}}/article` -> Show you a list of all articles on DB

POST `{{host}}/article` -> Create a new article and post a message to slack

PUT `{{host}}/article/:articleId` -> Update article

DELETE `{{host}}/article/:articleId` -> Delete article

GET `{{host}}/article/by-tags/:tagString` -> List of articles filtered by tagString, that string
has receives all tags separeted by comma, example: `tag1,tag2,tag3...`

In order to see the details of each endpoint please go to [Examples](https://github.com/nostick/workast/blob/master/src/examples.md)

<!-- Troubleshooting -->
## Troubleshooting

- If you get errors while setting up the app by folder that doesn't exist, please create this 
2 folders inside the root folder of the project

   ```sh
   $cd workast
   $mkdir dbdata logs
   ```

- If you get `'Token is not valid'` just create a new user  to get a new token,
keep in mind that jwt token expires in 1hour once it is created
  
- There is not way to reuse an user once the token has expired
