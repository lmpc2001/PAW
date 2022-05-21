const express = require('express');
const { prisma } = require('../database/connection');

function checkRoule(ruleRequired) {
    return (request, response, next) => {
        const { employee_rule } = request.body;

        if (employee_rule != ruleRequired && employee_rule != "admin") {
            return response.status(403).send({ error: 'Sem permissão para executar a operação solicitada' });
        }

        next();
    }
}

module.exports = { checkRoule };