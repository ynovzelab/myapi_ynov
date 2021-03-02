const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');

router.post('/users', user.create);
router.get('/users/:id', user.findOne);
router.post('/users/login', user.login);

module.exports = router;