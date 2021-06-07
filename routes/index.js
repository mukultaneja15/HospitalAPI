const express = require("express");
const router = express.Router();

// route for api requests
router.use('/api', require('./api'));

module.exports = router;