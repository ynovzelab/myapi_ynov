const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');

router.post('/users', user.create);

module.exports = router;