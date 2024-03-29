const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./UserModel');
const AdminModel = require('./AdminModel');


const TimetableModel = require('./TimetableModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vandanaakula004:vandana8125@cluster0.qkkoigv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB connected...'))
    .catch(err => console.error(err));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json("Faculty does not exist");
        }
        if (user.password === password) {
            return res.json("Login success");
        } else {
            return res.json("Incorrect password");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}); 
app.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ email });
        if (admin) {
            if (admin.password === password) {
                return res.json("Admin login success");
            } else {
                return res.json("Incorrect password");
            }
        } else {
            return res.json("Admin does not exist");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});



app.post('/submit-timetable', async (req, res) => {
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
});

app.get('/retrieveFacultyWorkload', async (req, res) => {
    const { weekName, from, to } = req.query;
    
    try {
        // Retrieve faculty members with workload 0 within the specified range and for the given weekName
        const facultyWithZeroWorkload = await TimetableModel.find({
            weekName: weekName,
            selectedHours: { $gte: from, $lte: to },
            workload: '0'
        }).distinct('facultyName');
    
        res.json(facultyWithZeroWorkload);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});