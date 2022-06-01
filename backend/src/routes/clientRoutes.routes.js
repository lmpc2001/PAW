const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const clientController = require('../controllers/clientController');
const accountController = require('../controllers/accountController');

const uploads = multer(multerConfig);

const clientRouter = Router();


clientRouter.get('/', clientController.index);
clientRouter.get('/search/:id', clientController.search);
clientRouter.post('/create', clientController.create);
clientRouter.post('/create/loyalty_program/:id', accountController.create);
clientRouter.put('/update/:id', clientController.update);
clientRouter.delete('/delete/:id', clientController.delete);

module.exports = clientRouter;