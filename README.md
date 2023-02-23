# Marvel - Api
### Powered by: [create-ts](https://github.com/RomerEnr/create-ts)

Hemos creado una pequeña API que simula el funcionamiento de la API de [Marvel](https://developer.marvel.com/). Nuestro objetivo es crear una pequeña base de datos con información básica, y un backend que consuma de esa base de datos donde se pide los siguientes endpoints:

+ Obtener información de un superheroe dado su ID.
+ Obtener información de un superheroe dado su nombre.


### Información del proyecto 

+ **Lenguaje:** TypeScript
+ **Framework:** Express
+ **Base de datos:** MongoDB
+ **ODM:** Mongoose
+ **Testing:** Jest
+ **Contenedores:** Docker
+ **Información de los contenedores:** Docker Compose

### Instalación

Para poder correr el proyecto, es necesario tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/).

Una vez instalado, se debe correr el siguiente comando:

```bash
docker-compose up
```

Dentro de la carpeta del proyecto debe estar el archivo `.env` con las siguientes variables de entorno:

+ MONGO_URL: URI de la base de datos.
+ PORT_APP: Puerto donde se va a correr la aplicación.

### Forma nativa de instalar:

+ Instalar [NodeJS](https://nodejs.org/es/download/).
+ Clonar el [repositorio](https://github.com/RomerEnr/marvel-api).
+ Configurar las variables de entorno en el archivo `.env`.
  + MONGO_URL: URI de la base de datos.
  + PORT_APP: Puerto donde se va a correr la aplicación.
+ Instalar las dependencias con el comando `npm install`.
+ Correr el proyecto con el comando `npm run dev` en forma de desarrollo o `npm run prod` en forma de producción.

### Endpoints de la API

+ **GET** `/characters`
	+ Obtiene una lista de todos los superheroes.
+ **GET** `/character/id/:id`
	+ Obtiene la información de un superheroe dado su ID.
+ **GET** `/character/name/:name`
	+ Obtiene la información de un superheroe dado su nombre.
+ **PUT** `/character`
	+ Crea un nuevo superheroe.
	+ Debemos pasar a través del body los datos del superheroe definidos en el modelo de datos.

Para hacer uso de estos endpoints podemos utilizar ThunderClient o Postman, una vez arrancado el proyecto en tu máquina podemos utilizar la siguiente URL:

```bash
http://localhost:3000
```

Por ejemplo:

```bash
http://localhost:3000/character/id/${id}
```

### Modelo de datos

```typescript
interface Character {
	name: string;
	description: string;
	universe: string;
	realName?: string;
	powers: string[];
	origin: string{"Natural", "Artificial", "Mutant", "Unknown", "Other"};
	created?: Date;
}
```