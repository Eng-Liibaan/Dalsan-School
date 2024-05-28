const express = require('express');
const { getclass, postclass, putclass, deleteclass, getclassid } = require('../Controller/class');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/', getclass).get('/:id', getclassid).post('/', postclass).put('/:id',  putclass).delete('/:id',  deleteclass)
module.exports = router;