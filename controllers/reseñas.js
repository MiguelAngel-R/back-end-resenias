'use strict';

let reseña = require('../models/reseñas');


function crearReseña(req, resp) {
    let nuevaReseña = reseña();

    nuevaReseña.nombreRestaurante = req.body.nombreRestaurante;
    nuevaReseña.calificacion = req.body.calificacion;
    nuevaReseña.resenia = req.body.resenia;
    nuevaReseña.fecha = new Date();
    nuevaReseña.usuario = req.body.usuario;

    nuevaReseña.save().then(
        respuesta => {
            resp.status(201).send({'mensaje' : true});
        },
        err => {
            resp.status(404).send({'mensaje': false});
        }
    );
}

function listarReseñas(req, resp){

    reseña.find({'usuario': req.body.usuario}).then(
        respuesta => {
            resp.status(201).send({'resenias' :respuesta});
        },
        err => {
            resp.status(404).send({'cursos' : err});
        }
    );
}

function modificarReseña(req, resp){
    let nuevaReseña = reseña();

    nuevaReseña._id = req.body._id;
    nuevaReseña.nombreRestaurante = req.body.nombreRestaurante;
    nuevaReseña.calificacion = req.body.calificacion;
    nuevaReseña.resenia = req.body.resenia;
    nuevaReseña.fecha = new Date();
    nuevaReseña.usuario = req.body.usuario;

    reseña.findByIdAndUpdate(nuevaReseña._id, nuevaReseña, {new: true}).then(
        respuesta => {
            resp.status(200).send({'mensaje' : true});
        },
        err => {
            resp.status(404).send({'mensaje': false});
        }
    );
}

function eliminarReseña(req, resp){
    reseña.findByIdAndDelete(req.body.id).then(
        respuesta => {
            resp.status(200).send({'mensaje' : true});
        },
        err => {
            resp.status(404).send({'mensaje': false});
        }
    );
}

module.exports = {
    crearReseña,
    listarReseñas,
    modificarReseña,
    eliminarReseña
};