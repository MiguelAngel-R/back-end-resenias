'use strict';

let mongoose = require('mongoose');
let aplication = require('../aplication');


mongoose.connect('mongodb://localhost:27017/usuarios_reseñas').then(
    () => {
        console.log("connection ok");
        aplication.listen(2409);    
    },
    err => {
        console.log(err);
    }
);


module.exports = mongoose;

