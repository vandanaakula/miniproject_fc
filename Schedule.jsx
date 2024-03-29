import React, { useState } from 'react';
import './Schedule.css'; // Import the external CSS file
import axios from 'axios';

const Schedule = () => {
    const [facultyName, setFacultyName] = useState('');
    const [weekName, setWeekName] = useState('');
    const [selectedHours, setSelectedHours] = useState('');
    const [workload, setWorkload] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/submit-timetable', {
                facultyName,
                weekName,
                selectedHours,
                workload
            });
            console.log(response.data);
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setMessage("Internal server error");
        }
    };

    return (
        <div className="container">
            <h1>Add Schedule</h1>
            <form onSubmit={handleSubmit}>  
                <div className="form-group">
                    <label htmlFor="facultyName">Faculty Name</label>
                    <input type="text" id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="weekName">Week Name</label>
                    <select id="weekName" value={weekName} onChange={(e) => setWeekName(e.target.value)}>
                        <option value="">Select Week</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedHours">Select Hours</label>
                    <select id="selectedHours" value={selectedHours} onChange={(e) => setSelectedHours(e.target.value)}>
                        <option value="">Select Hours</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="workload">Workload</label>
                    <input type="text" id="workload" value={workload} onChange={(e) => setWorkload(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
export default Schedule;