import React from 'react';
import { Link } from 'react-router-dom';

const FacultyOptions = () => {
    return (
        <div>
            <h1>Faculty Options</h1>
            <ul>
                <li>
                    <Link to='/add-faculty'>Add Faculty</Link>
                </li>
                <li>
                    <Link to='/update-faculty'>Update Faculty</Link>
                </li>
                <li>
                    <Link to='/delete-faculty'>Delete Faculty</Link>
                </li>
                <li>
                    <Link to='/retrieve-free-hours'>Retrieve Free Hours</Link>
                </li>
                <li>
                    <Link to='/schedule'>Insert Schedule</Link>
                </li>
            </ul>
        </div>
    );
}

export default FacultyOptions;
