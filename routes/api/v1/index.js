const express = require("express");
const router = express.Router();

// route for doctors requests
router.use('/doctors', require('./doctors'));

// route for patient related requests
router.use('/patients', require('./patients'));

// route for report of patient
router.use('/reports', require('./reports'));

module.exports = router;