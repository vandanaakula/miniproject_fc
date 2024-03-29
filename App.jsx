import React from 'react';
import './App.css';
import Navbarhome from './Navbarhome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FacultyLoginForm from './FacultyLoginForm';
import AdminLoginForm from './AdminLoginForm';
import Schedule from './Schedule';
import RetrieveFreeHours from './RetrieveFreeHours';
import LandingPage from './LandingPage';
import FacultyOptions from './FacultyOptions'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Navbarhome />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/faculty-login' element={<FacultyLoginForm />} />
          <Route path='/admin-login' element={<AdminLoginForm />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/retrieve-free-hours' element={<RetrieveFreeHours />} />
          <Route path='/faculty-options' element={<FacultyOptions />} /> {/* New route for faculty options */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
