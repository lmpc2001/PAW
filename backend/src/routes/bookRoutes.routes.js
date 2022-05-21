const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const bookController = require('../controllers/booksController');

const uploads = multer(multerConfig);

const bookRouter = Router();

bookRouter.get('/', bookController.index);
bookRouter.get('/search/', bookController.search);
bookRouter.post('/create', uploads.single('coverImage'),bookController.create);
bookRouter.put('/update/:id', bookController.update);
bookRouter.delete('/delete/:id', bookController.delete);

module.exports = bookRouter;