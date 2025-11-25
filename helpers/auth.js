'use strict';

let jwt = require('jwt-simple');
let moment = require('moment');

let secret = 'safgsguyrtfghh1323445.sdsg!';

function generateToken(usuario){
    let paylod = {
        sub: usuario._id,
        name : usuario.usuario,
        iat: moment().unix(),
        exp: moment().add('15', 'minutes').unix()
    }

    return jwt.encode(paylod, secret);

}

function validateToken(req, resp, nextStep){
    try{
        let token = req.headers.authorization;
        let cleanToken = token.replace('Bearer ', '');

        let payload = jwt.decode(cleanToken, secret);

        req.header.userId = payload.sub; // opcional nospermite recordar en la cabecera el id del usuario logueado
        nextStep();
    }catch(ex){
        resp.status(401).send({'message': 'Invalid token'});
    }
}

module.exports = {generateToken, validateToken};