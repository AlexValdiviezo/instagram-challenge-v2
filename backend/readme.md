# Backend of Instagram Challenge

This is a server backend with express `api rest` and graphql endpoints.

### graphql endpoints: http://localhost:4000/graphql

### api rest endpoints: http://localhost:4000/api

# Init | Inicialización

1) `npm install` to install al dependences
2) `npm run dev` to run server at port 4001

Url of all graphql endpoints access: http://localhost:4001/graphql

To set env create a .env and set this env:

<code>
MONGO_DB= <br>
PORT=4000 <br>
API_REST=/api <br>
</code>

# graphql
<center><image src="./readme_assets/rootTypes.png"></center> <br>
<center><image src="./readme_assets/QueryDocumentation.png"> </center>
<center><u>Query Documentation</u></center> <br>
<center><image src="./readme_assets/MutationDocument.png"> </center>
<center><u>Mutation Documentation</u></center> <br>

# API REST ENDPOINTS
<center><u>Get all posts</u></center> <br>
<center><image src="./readme_assets/getAllPosts.png"> </center> <br>
<code>
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{url}}:{{port}}/api/post',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
</code> <br>

<center><u>Get one post</u></center> <br>
<center><image src="./readme_assets/getOnePost.png"> </center> <br>
```js
var axios = require('axios');
var data = '{\n    "id": "63345434ef147150b434d124"\n}';

var config = {
  method: 'put',
  url: '{{url}}:{{port}}/api/post/likes',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
``` 
