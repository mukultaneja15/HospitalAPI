// require mongoose 
const mongoose = require('mongoose');

// Reports SCHEMA
const reportSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DOCTOR',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;