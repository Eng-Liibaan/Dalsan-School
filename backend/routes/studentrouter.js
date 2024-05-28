const express = require('express');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const { getstudent, getstudentid, poststudent, putstudent, deletestudent } = require('../Controller/student');
const router = express.Router();
router.get('/', getstudent).get('/:id', getstudentid).post('/', poststudent).put('/:id/' , putstudent).delete('/:id', deletestudent)
module.exports = router;