const express = require('express');
const { getuser, getuserid, postuser, putuser, deleteuser } = require('../Controller/user');
const { AuthorizationUser, AuthorizationAdmin ,Upload} = require('../middleware');
const router = express.Router();
router.get('/', getuser).get('/:id', getuserid).post('/',Upload, postuser).put('/:id',Upload, putuser).delete('/:id',deleteuser)
module.exports = router;