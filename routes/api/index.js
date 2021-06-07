const express = require("express");
const router = express.Router();

// route for v1 requests
router.use('/v1', require('./v1'));

module.exports = router;