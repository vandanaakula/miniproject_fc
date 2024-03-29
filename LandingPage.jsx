import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the System</h1>
            <div className='options'>
                <ul>
                    <li>
                        <Link to='/faculty-login'>Faculty Login</Link>
                    </li>
                    <li>
                        <Link to='/admin-login'>Admin Login</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPage;
