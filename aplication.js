'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let routerReseñas = require('./routes/reseñas');
let routerUsuarios = require('./routes/usuario');
let cors = require('cors');

let application = express();

application.use(cors());
application.use(bodyParser.json());
application.use(routerReseñas);
application.use(routerUsuarios);

module.exports = application;