const { Router } = require('express');

const employeesRouter = require('./employeeRoutes.routes');
const clientsRouter = require('./clientRoutes.routes');
const booksRouter = require('./bookRoutes.routes');
const purchaseRouter = require('./purchaseRoutes.routes');
const loginRouter = require('./loginRoutes.routes');
const loginMidlleware = require('../middlewares/login');
const { checkRoule } = require('../middlewares/authorization');

const router = Router();

router.use("/employees", employeesRouter);
router.use("/clients", clientsRouter);
router.use("/books", [loginMidlleware, checkRoule('user')], booksRouter);
router.use("/purchases", loginMidlleware, purchaseRouter);
router.use("/session", loginRouter);


module.exports = router;