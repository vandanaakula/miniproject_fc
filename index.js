const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vandanaakula004:vandana8125@cluster0.qkkoigv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB connected'))
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

const FacultyModel = mongoose.model('Faculty', facultySchema);
const AdminModel = mongoose.model('Admin', adminSchema);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await FacultyModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                return res.json("Login success");
            } else {
                return res.json("Incorrect password");
            }
        } else {
            return res.json("Faculty does not exist");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ email: email });
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
