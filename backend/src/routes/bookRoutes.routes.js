const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const bookController = require('../controllers/booksController');
const loginMidlleware = require('../middlewares/login');
const { checkRoule } = require('../middlewares/authorization');

const uploads = multer(multerConfig);

const bookRouter = Router();

bookRouter.get('/', bookController.index);
bookRouter.get('/search/', bookController.search);
bookRouter.post('/create', [loginMidlleware, checkRoule('user')],uploads.single('coverImage'),bookController.create);
bookRouter.put('/update/:id', [loginMidlleware, checkRoule('user')],bookController.update);
bookRouter.delete('/delete/:id', [loginMidlleware, checkRoule('user')],bookController.delete);

module.exports = bookRouter;