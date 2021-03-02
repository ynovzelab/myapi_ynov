const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/users', user.create);

router.post('/users/login', user.login);

router.get('/users/:id', verifyToken, user.findOne);

module.exports = router;