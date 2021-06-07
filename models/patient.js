// require mongoose 
const mongoose = require('mongoose');

// Patient SCHEMA
const patientSchema = mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report' 
        }
    ]
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;