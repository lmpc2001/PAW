
const { Router } = require('express');
const loginController = require('../controllers/loginController');
const loginMidlleware = require('../middlewares/login');

const loginRouter = Router();

loginRouter.post('/login', loginController.login);
loginRouter.post('/logout', loginMidlleware, loginController.logout);

module.exports = loginRouter