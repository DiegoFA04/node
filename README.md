# NodeJS API

## Descripción

Esta es una API construida con Node.js y Express que permite gestionar una colección de tracks musicales. La API proporciona endpoints para crear, leer, actualizar y eliminar (CRUD) tracks en una base de datos MongoDB.

## Características

- **Crear Tracks**: Permite agregar nuevos tracks a la colección.
- **Leer Tracks**: Permite obtener la lista de todos los tracks o un track específico por su ID.
- **Actualizar Tracks**: Permite modificar la información de un track existente.
- **Eliminar Tracks**: Permite eliminar un track de la colección.

## Requisitos

- Node.js (v14 o superior)
- MongoDB

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/DiegoFA04/nodejs-API.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd nodejs-API
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
   ```

## Uso

1. Inicia el servidor:
   ```sh
   npm start
   ```
2. La API estará disponible en `http://localhost:3000`.

## Endpoints

### Crear un Track

- **URL**: `/api/tracks`
- **Método**: `POST`
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "Nombre del track",
    "album": "Nombre del álbum",
    "cover": "URL de la portada",
    "artist": {
      "name": "Nombre del artista",
      "nickname": "Apodo del artista",
      "nationality": "Nacionalidad del artista"
    },
    "duration": {
      "start": 0,
      "end": 240
    },
    "mediaId": "ID del medio"
  }
  ```

### Leer Tracks

- **URL**: `/api/tracks`
- **Método**: `GET`

- **URL**: `/api/tracks/:id`
- **Método**: `GET`

### Actualizar un Track

- **URL**: `/api/tracks/:id`
- **Método**: `PUT`
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "Nombre del track",
    "album": "Nombre del álbum",
    "cover": "URL de la portada",
    "artist": {
      "name": "Nombre del artista",
      "nickname": "Apodo del artista",
      "nationality": "Nacionalidad del artista"
    },
    "duration": {
      "start": 0,
      "end": 240
    },
    "mediaId": "ID del medio"
  }
  ```

### Eliminar un Track

- **URL**: `/api/tracks/:id`
- **Método**: `DELETE`

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
