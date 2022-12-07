const express = require('express');
const {
    billsList
} = require('./controllers/bills');

const routes = express();

routes.get('/contas', billsList);



module.exports = routes;