const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const employeeController = require('../controllers/employeesController');

const uploads = multer(multerConfig);

const employeeRouter = Router();

employeeRouter.get('/', employeeController.index);
employeeRouter.get('/search/:id', employeeController.search);
employeeRouter.post('/create', employeeController.create);
employeeRouter.post('/admin/create', employeeController.create_Admin);
employeeRouter.put('/update/:id', employeeController.update);
employeeRouter.delete('/delete/:id', employeeController.delete);

module.exports = employeeRouter;