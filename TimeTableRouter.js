/*const express = require('express');
const router = express.Router();
const TimetableModel = require('./TimetableModel'); // Corrected path

// Handle form submission
router.post('/submit-timetable', async (req, res) => {
    try {
        const { facultyName, weekName, selectedHours, workload } = req.body;
        
        // Create a new timetable entry
        const newTimetableEntry = new TimetableModel({
            facultyName,
            weekName,
            selectedHours,
            workload
        });

        // Save the new entry to the database
        await newTimetableEntry.save();

        res.status(200).json({ success: true, message: "Timetable entry added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});*/

module.exports = router;
