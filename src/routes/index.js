const express = require('express');
const router = express.Router();

const userRouter = require('./users.route');

router.use(userRouter);

module.exports = router;