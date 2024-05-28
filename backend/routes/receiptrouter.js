const express = require('express');
const { postreceipt, getreceipt, getreceiptid, putreceipt, deletereceipt } = require('../Controller/receipt');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/', getreceipt).get('/:id', getreceiptid).post('/', postreceipt).put('/:id', putreceipt).delete('/:id', deletereceipt)
module.exports = router;