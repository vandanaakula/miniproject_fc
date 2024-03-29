// Navbarhome.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbarhome = () => {
    return ( 
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/faculty-login'>Faculty Login</Link>
                </li>
                <li>
                    <Link to='/admin-login'>Admin Login</Link> {/* Add admin login link */}
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbarhome;
