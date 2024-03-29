import React, { useState } from 'react';

const RetrieveFreeHours = () => {
    const [weekName, setWeekName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [facultyNames, setFacultyNames] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/retrieveFacultyWorkload?weekName=${weekName}&from=${from}&to=${to}`);
            const data = await response.json();
            console.log('Faculty Names:', data);
            setFacultyNames(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            // Handle error state in your component if needed
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='firstdiv'>
                    <div >
                        <label htmlFor="weekName">Week Name:</label>
                        <select 
                            id="weekName" 
                            value={weekName} 
                            onChange={(e) => setWeekName(e.target.value)}
                        >
                            <option value="">Select Week Name</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div >
                        <label htmlFor="from">From:</label>
                        <select 
                            id="from" 
                            value={from} 
                            onChange={(e) => setFrom(e.target.value)}
                        >
                            <option value="">Select From</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="to">To:</label>
                        <select 
                            id="to" 
                            value={to} 
                            onChange={(e) => setTo(e.target.value)}
                        >
                            <option value="">Select To</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <h2>List of Faculty Names with 0 Workload</h2>
                <ul>
                    {facultyNames.map((facultyName, index) => (
                        <li key={index}>{facultyName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RetrieveFreeHours;
