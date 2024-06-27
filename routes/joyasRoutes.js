const express = require('express');
const router = express.Router();
const { results: joyas } = require('../data/joyas');  // Asegúrate de que el path es correcto

// Ruta GET para obtener todas las joyas con estructura HATEOAS, filtrado, paginación y ordenamiento
router.get('/', (req, res) => {
    let filteredJoyas = [...joyas];

    // Filtrado por campos
    Object.keys(req.query).forEach(key => {
        if (['page', 'limit', 'sort'].includes(key)) return; // Ignora las claves de paginación y ordenamiento
        filteredJoyas = filteredJoyas.filter(joya => String(joya[key]) === String(req.query[key]));
    });

    // Ordenamiento
    if (req.query.sort) {
        const sortOrder = req.query.sort === 'desc' ? -1 : 1;
        filteredJoyas.sort((a, b) => (a.value - b.value) * sortOrder);
    }

    // Paginación
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = filteredJoyas.slice(startIndex, endIndex).map(joya => ({
        ...joya,
        links: {
            self: `http://localhost:3000/joyas/${joya.id}`,
            byCategory: `http://localhost:3000/joyas/categoria/${joya.category}`
        }
    }));

    res.json(result);
});

// Ruta GET para obtener joyas por categoría
router.get('/categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const categoryJoyas = joyas.filter(joya => joya.category === categoria).map(joya => ({
        ...joya,
        links: {
            self: `http://localhost:3000/joyas/${joya.id}`
        }
    }));

    if (categoryJoyas.length === 0) {
        res.status(404).json({ error: 'No se encontraron joyas para la categoría especificada' });
    } else {
        res.json(categoryJoyas);
    }
});

// Ruta GET para obtener una joya específica por ID y manejar errores si no se encuentra
router.get('/:id', (req, res) => {
    const joya = joyas.find(j => j.id === parseInt(req.params.id));
    if (!joya) {
        return res.status(404).json({ error: 'Joya no encontrada' });
    }
    res.json({
        ...joya,
        links: {
            byCategory: `http://localhost:3000/joyas/categoria/${joya.category}`
        }
    });
});

module.exports = router;
