// require mongoose 
const mongoose = require('mongoose');

// DOCTOR SCHEMA
const doctorSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
}, {
    timestamps: true
});

const DOCTOR = mongoose.model('DOCTOR', doctorSchema);

module.exports = DOCTOR;
