const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const purchaseController = require('../controllers/purchaseController');

const uploads = multer(multerConfig);

const purchaseRouter = Router();

purchaseRouter.get('/', purchaseController.index);
purchaseRouter.get('/search/:id', purchaseController.search);
purchaseRouter.post('/create', purchaseController.create);
purchaseRouter.post('/closePurchase/:purchase_id', purchaseController.completePurchase)
purchaseRouter.put('/:id', purchaseController.update);
purchaseRouter.delete('/delete/:id', purchaseController.delete);

module.exports = purchaseRouter;