const express = require('express');
const {
    uploadData,
    filterBy,} = require('../controllers/person.controller')
const router = express.Router();


router.route('/').get(uploadData);
router.route('/filter').get(filterBy);
module.exports = router;