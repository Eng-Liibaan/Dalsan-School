const express = require('express');
const { login, Change } = require('../Controller/user');
const router = express.Router();
router.post('/', login).post('/change',Change)
module.exports = router;