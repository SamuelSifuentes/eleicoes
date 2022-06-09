import express from 'express';

const controller = require("../controller/controller")
const routes = express.Router();

routes.get('/', controller.index);


module.exports = routes;