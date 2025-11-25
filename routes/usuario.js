'use strict';

let express = require('express');
let userControllers = require('../controllers/usuario');
let userAuth = require('../helpers/auth');

let router = express.Router();

router.post('/api/usuario', userControllers.crearUsuario);
router.post('/api/login', userControllers.loginUsuario);
router.post('/api/validar', userControllers.verificarCredenciales);

module.exports = router;