'use strict';


let auth = require('../helpers/auth');
let usuario = require('../models/usuario');
let bcrypt = require('bcryptjs');


function crearUsuario(req, resp){
    let salt = bcrypt.genSaltSync(15);
    let newUser = new usuario();
    newUser.usuario = req.body.usuario;
    newUser.password = bcrypt.hashSync(req.body.password, salt);

    newUser.save().then(
        (userSaved) => {
            resp.status(201).send({"mensaje": true});
        },
        err => {
            resp.status(500).send({"mensaje": false});
        }
    );
}

function loginUsuario(req, resp){
    usuario.findOne({'usuario': req.body.usuario}).then(
        (userFound) => {
            if (userFound == null) {
                resp.status(404).send({"message": "el usuario no existe"});                
                return;
            }
            if (bcrypt.compareSync(req.body.password, userFound.password)) {
                resp.status(200).send({"token": auth.generateToken(userFound)});
            }
            else{
                resp.status(401).send({"message": "Incorrect password"});
            }
        },
        err => {
            resp.status(500).send({"message": "Error while loging the user"})
        }
    );
}

function verificarCredenciales(req, resp){
    usuario.findOne({'usuario': req.body.usuario}).then(
        (userFound) => {
            if (userFound == null) {
                resp.status(200).send({"mensaje": false});                
            }
            else{
                resp.status(200).send({"mensaje": true});
            }
        },
        err => {
            resp.status(500).send({"message": "Error while loging the user"})
        }
    );
}


module.exports ={
    crearUsuario,
    loginUsuario,
    verificarCredenciales
};