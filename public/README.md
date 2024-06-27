# Tienda de Joyas API

Este proyecto es una API para una tienda de joyas, diseñada para gestionar un inventario de joyas y permitir a los usuarios interactuar con estos datos a través de una interfaz web. La API está construida con Node.js y Express y ofrece funcionalidades como filtrado, paginación y ordenamiento.

## Características

- **Listar todas las joyas**: Permite a los usuarios ver todas las joyas disponibles en la tienda.
- **Filtrado dinámico**: Los usuarios pueden filtrar las joyas por cualquier campo, como categoría o metal.
- **Paginación**: Soporte para paginación para mejorar el manejo de grandes conjuntos de datos.
- **Ordenamiento**: Los usuarios pueden ordenar las joyas por precio de forma ascendente o descendente.
- **Interfaz amigable**: Incluye un archivo HTML con una tabla interactiva que permite a los usuarios interactuar fácilmente con la API.

## Tecnologías Utilizadas

- Node.js
- Express
- JavaScript
- HTML/CSS

## Estructura del Proyecto

tienda-de-joyas/
│
├── data/
│ └── joyas.js # Datos de las joyas
│
├── routes/
│ └── joyasRoutes.js # Rutas del servidor para gestionar las joyas
│
├── public/
│ └── index.html # Frontend para interactuar con la API
│
├── app.js # Archivo principal del servidor Express
│
└── package.json # Metadatos del proyecto y dependencias


## Instalación y Ejecución

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/JuanaC24/Tienda-de-joyas.git]

2. Instala las dependencias:

cd tienda-de-joyas
npm install

3. Inicia el servidor:

node app.js

Ahora puedes acceder a la interfaz web navegando a http://localhost:3000/ en tu navegador.

API Endpoints
GET /joyas: Devuelve todas las joyas con enlaces HATEOAS.
Parámetros de query opcionales para filtrado, paginación y ordenamiento.
GET /joyas/categoria/:categoria: Devuelve joyas de una categoría específica.
GET /joyas/:id: Devuelve detalles de una joya específica y maneja errores si la joya no existe.

Cómo Contribuir
Si deseas contribuir a este proyecto, considera seguir estas pautas:

Realiza un fork del repositorio.
Crea una nueva rama para cada característica o mejora.
Envía un pull request con tus cambios para revisión.



