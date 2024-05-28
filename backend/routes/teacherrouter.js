const express = require('express');
const { getteacher, postteacher, putteacher, deleteteacher, getteacherid } = require('../Controller/teacher');
const { AuthorizationAdmin, AuthorizationUser } = require('../middleware');
const router = express.Router();
router.get('/', getteacher).get('/:id', getteacherid).post('/', postteacher).put('/:id', putteacher).delete('/:id', deleteteacher)
module.exports = router;