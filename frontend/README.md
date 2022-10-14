# Instagram challenge v2 - Frontend
## Version 1.0.0

## Init | Inicialización
1) <code>npm install</code>
2) <code>npm run serve</code>
* **warning: if the backend server no are host in http://localhost:4001 the app will not load**
* building app: <code>npm build</code>

# App | Aplicación

This is a representative instagram app developed with Vue@2.0

Es una aplicación representativa de instagram, desarrollada con Vue en su versión 2.

# Plugins | Adicionales
- vuex
- vuetify

# Components | Componentes

- ### Alert:
This is a dinamic component and is used to generate alerts of all kinds (success, warning, error). <hr>
Este es un componente dinamico capas de generar alertas de diferentes categorias (exito, advertencia, error)

- ### CardContainer: 
This is a card container component. Its functionality is to get the posts through a provider and layout them in cards. <hr>
Este es un componente contenedor de tarjetas. Su funcionalidad es obtener las publicaciones a traves de un `provider` y maquetarlas en diferentes tarjetas.

- ### Navbar: 
This is a navbar and serves for navigation through app routes. <hr>
Esta es una barra de navegacion y sirve para navegar a traves de las rutas que contiene la aplicación.

- ### ServerNotFound:
This is a component that send a notification to the client with server not found. <hr>
Esta es un componente que envía al cliente una notificacion avisando que el servidor no esta funcionando.

# Views | Vistas

- ### AddPost:
This is a view that show a post form. Its functionality is to create the post. <hr>
Este es una vista que muestra un formulario para crear una publicación.

- ### EditPost:
This is a view that show a card with edit action. <hr>
Esta es una vista que muestra la card con la opción de editarla.

- ### Home:
This is a home view. <hr>
Esta es la vista principal.

- ### Profile:
This is a dinamic profile view with username.<hr>
Esta es una vista dinamica que muestra el perfil dependiendo de su `username`.

# App view | Vista de la aplicación
![text](https://raw.githubusercontent.com/bloome-alex/instagram-challenge-v2/main/frontend/readme_assets/images/appView.png) <br>

# Using alert component | Usando el componente de alertas
* Set new return text and type computed propertys: <br>
![text](https://raw.githubusercontent.com/bloome-alex/instagram-challenge-v2/main/frontend/readme_assets/images/computedAlert.png) <br>
* Set Alert states and create mutations: <br>
![text](https://raw.githubusercontent.com/bloome-alex/instagram-challenge-v2/main/frontend/readme_assets/images/AlertStates.png) <br>
* Map mutations and send true: <br>
![text](https://raw.githubusercontent.com/bloome-alex/instagram-challenge-v2/main/frontend/readme_assets/images/mapMutationsAlerts.png) <br>

## *Preview of alert:*
![text](https://raw.githubusercontent.com/bloome-alex/instagram-challenge-v2/main/frontend/readme_assets/images/alertPreview.png)

<hr>

# Context:
This app was created with objective of refine my skills at vue, vuex and vuetify. <hr>
Esta aplicación fué creada con el objetivo de mejorar mis conocimientos en vue, vuex y vuetify
