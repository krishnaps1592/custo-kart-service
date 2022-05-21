const express = require('express')
const app = new express();
const _router = app.Router;
const customerController = require( '../controller/customerController')

_router.get('/customers', customerController.getAll)


_router.post('/customers', customerController.createOne)

module.exports= _router