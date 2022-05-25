const express = require('express');
const {AES, enc} = require('crypto-js');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync(path.join(__dirname, '../keys', 'publicKey.pem'));

module.exports = (request, response, next) => {
    const headerAuth = request.headers.authorization;

    if (!headerAuth) {
        return response.status(401).send({ error: 'Sem token fornecido' });
    }
    
    const parts = headerAuth.split(' ');

    if (parts.length != 2) {
        return response.status(401).send({ error: 'Erro de token' });
    }
    
    const [prefix, token] = parts;

    if (!/^Bearer$/i.test(prefix)) {
        return response.status(401).send({ error: 'Formato de token inválido' });
    }

    
    jwt.verify(AES.decrypt(token, `${process.env.SECRET}`).toString(enc.Utf8), publicKey, (error, decoded) => {
        if (error) {
            return response.status(403).send({ error: 'Token inválido' });
        }

        
        // decoded.client_id != undefined && (request.body.client_id = decoded.client_id) 
        request.user_id = decoded.user_id;
        request.employee_id = decoded.id;
        request.employee_rule = decoded.roule?.description;
        next();
    })
}