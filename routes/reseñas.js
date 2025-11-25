'use strict';

let express = require('express');
let reseñasControllers = require('../controllers/reseñas');
let auth = require('../helpers/auth');
let router = express.Router();

router.post('/api/listar', reseñasControllers.listarReseñas);
router.post('/api/crear', reseñasControllers.crearReseña);
router.post('/api/modificar', reseñasControllers.modificarReseña);
router.post('/api/eliminar', reseñasControllers.eliminarReseña);

module.exports = router;