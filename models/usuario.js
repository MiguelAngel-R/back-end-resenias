'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema

let UserSchema = Schema({
    usuario: String,
    password: String
});

module.exports = mongoose.model('usuarios', UserSchema);