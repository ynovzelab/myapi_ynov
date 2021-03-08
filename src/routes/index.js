const express = require('express');
const router = express.Router();

const usersRouter = require('./users.route');
const productsRouter = require('./products.route');
const orderRouter = require('./order.route');

router.use(usersRouter);
router.use(productsRouter);
router.use(orderRouter);

module.exports = router;