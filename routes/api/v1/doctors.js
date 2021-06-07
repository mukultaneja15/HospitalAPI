const express = require("express");
const router = express.Router();
const passport = require("passport");

const doctorRequests = require('../../../controllers/api/v1/doctorApi');

// post req for registering doctor
router.post('/register', doctorRequests.createDoctor);

// authenticated login request for
router.post('/login', passport.authenticate('local', { session:false}), doctorRequests.loginDoctor);

module.exports = router;