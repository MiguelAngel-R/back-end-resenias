'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema

let UserSchema = Schema({
    nombreRestaurante: String,
    calificacion: Number,
    resenia: String,
    fecha: Date,
    usuario: String
});

module.exports = mongoose.model('reseñas', UserSchema);