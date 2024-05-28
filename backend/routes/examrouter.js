const express = require('express');
const { getexam, postexam, putexam, deleteexam, getexamid } = require('../Controller/exam');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/', getexam).get('/:id', getexamid).post('/', postexam).put('/:id',  putexam).delete('/:id',  deleteexam)
module.exports = router;