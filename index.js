const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const UserModel = require('./UserModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vandanaakula004:vandana8125@cluster0.qkkoigv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB connected...'))
    .catch(err => console.error(err));

const facultySchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('Faculty', facultySchema);
const AdminModel = mongoose.model('Admin', adminSchema);

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json("User already exists");
        }
        const newUser = new UserModel({ email, password });
        await newUser.save();
        return res.json("Registration success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});
app.post('/admin-register', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if admin with the same email already exists
        const existingAdmin = await AdminModel.findOne({ email });
        if (existingAdmin) {
            return res.json("Admin already exists");
        }
        // If admin does not exist, create a new admin user
        const newAdmin = new AdminModel({ email, password });
        await newAdmin.save();
        return res.json("Admin registration success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
