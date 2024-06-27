const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Requiere el router de joyas
const joyasRoutes = require('./routes/joyasRoutes');

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Rutas para manejar las peticiones a "/joyas"
app.use('/joyas', joyasRoutes);

// Ruta raíz que redirecciona al archivo index.html en la carpeta 'public'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejar rutas no encontradas para proporcionar una mejor respuesta de error
app.use((req, res) => {
    res.status(404).json({
        error: "Recurso no encontrado"
    });
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
