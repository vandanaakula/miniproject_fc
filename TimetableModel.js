const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: true
    },
    weekName: {
        type: String,
        required: true
    },
    selectedHours: {
        type: Number,
        required: true
    },
    workload: {
        type: String,
        required: true
    }
});

const TimetableModel = mongoose.model('Timetable', timetableSchema);

module.exports = TimetableModel;
