const express = require('express');
const Router = express.Router();
const userController = require('../Controller/userController');

Router.post('/signup', userController.signUp);
Router.post('/login', userController.login);

module.exports = Router;