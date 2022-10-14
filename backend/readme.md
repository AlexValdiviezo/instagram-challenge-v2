## English:
# Backend of Instagram Challenge

This is a server backend with express `api rest` and graphql endpoints.

### graphql endpoints: http://localhost:4000/graphql

### api rest endpoints: http://localhost:4000/api

# Init

1) `npm install` to install all dependences.
2) `npm run dev` to run server at develop environment.
3) `npm run start` to run server at production environment.

Url of all graphql endpoints access: http://localhost:4001/graphql

To set env create a .env and set this env:

```
MONGO_DB= <br>
PORT=4000 <br>
API_REST=/api <br>
```

# graphql
<center><image src="./readme_assets/rootTypes.png"></center> <br>
<center><image src="./readme_assets/QueryDocumentation.png"> </center>
<center><u>Query Documentation</u></center> <br>
<center><image src="./readme_assets/MutationDocument.png"> </center>
<center><u>Mutation Documentation</u></center> <br>

# API REST ENDPOINTS
<center><u>Get all posts</u></center> <br>
<center><image src="./readme_assets/getAllPosts.png"> </center> <br>

```js
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
```

<br></br>

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

<br></br>

<center><u>Get Page post</u></center> <br>
<center><image src="./readme_assets/getPagePost.png"> </center> <br>

```js
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{url}}:{{port}}/api/post/paginate?page=5&limit=2',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

<center><u>Create post</u></center> <br>
<center><image src="./readme_assets/createPost.png"> </center> <br>

```js
var axios = require('axios');
var data = '{\n    "username": "10",\n    "title": "titulo",\n    "image": "https://media.revistagq.com/photos/613f011855410d2ed6954ee7/master/pass/2445034.jpg"\n}';

var config = {
  method: 'post',
  url: '{{url}}:{{port}}/api/post',
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

<center><u>Add Like</u></center> <br>
<center><image src="./readme_assets/AddLike.png"> </center> <br>

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

<center><u>Delete Post</u></center> <br>
<center><image src="./readme_assets/deletePost.png"> </center> <br>

```js
var axios = require('axios');
var data = '{\n    "id": "632e03bff2af233fef806cf6"\n}';

var config = {
  method: 'delete',
  url: '{{url}}:{{port}}/post',
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

# Context

Server Api created for learning graphql and apollo server and refine my skills with mongoDB and express rest api.

<hr>

## Spanish:
<br></br>
# Servidor backend del Instagram Challenge

Este es un servidor backend que contiene tantp `api rest` como `graphql`.

### graphql endpoints: http://localhost:4000/graphql

### api rest endpoints: http://localhost:4000/api

# Inicialización

1) `npm install` para instalar todas las dependencias necesarias.
2) `npm run dev` Para ejecutar el servidor en entorno de desarrollo.
3) `npm run start` Para ejecutar el servidor en su entorno de producción.

Url para acceder a todos los endpoint de graphql: http://localhost:4001/graphql

Configurar variables de entorno previo a ejecución:

```
MONGO_DB= <br>
PORT=4000 <br>
API_REST=/api <br>
```

# graphql
<center><image src="./readme_assets/rootTypes.png"></center> <br>
<center><image src="./readme_assets/QueryDocumentation.png"> </center>
<center><u>Documentación de Query</u></center> <br>
<center><image src="./readme_assets/MutationDocument.png"> </center>
<center><u>Documentación de Mutation</u></center> <br>

# API REST ENDPOINTS
<center><u>Obtener todas las publicaciones</u></center> <br>
<center><image src="./readme_assets/getAllPosts.png"> </center> <br>

```js
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
```

<br>

<center><u>Obtener una publicación</u></center> <br>
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

<br>

<center><u>Obtener publicaciones por pagina y limite</u></center> <br>
<center><image src="./readme_assets/getPagePost.png"> </center> <br>

```js
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{url}}:{{port}}/api/post/paginate?page=5&limit=2',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

<center><u>Crear una publicación</u></center> <br>
<center><image src="./readme_assets/createPost.png"> </center> <br>

```js
var axios = require('axios');
var data = '{\n    "username": "10",\n    "title": "titulo",\n    "image": "https://media.revistagq.com/photos/613f011855410d2ed6954ee7/master/pass/2445034.jpg"\n}';

var config = {
  method: 'post',
  url: '{{url}}:{{port}}/api/post',
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

<center><u>Añadir un like</u></center> <br>
<center><image src="./readme_assets/AddLike.png"> </center> <br>

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

<center><u>Eliminar una publicación</u></center> <br>
<center><image src="./readme_assets/deletePost.png"> </center> <br>

```js
var axios = require('axios');
var data = '{\n    "id": "632e03bff2af233fef806cf6"\n}';

var config = {
  method: 'delete',
  url: '{{url}}:{{port}}/post',
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

# Contexto
API creada con el proposito de estudiar graphql y apollo server. Además de mejorar mis habilidades previas en mongoDB y express rest api.