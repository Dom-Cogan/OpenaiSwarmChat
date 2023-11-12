import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home'; // Assuming this is the Home component you want to use

// Other components/pages
const Profiles = () => <div>Profiles Page</div>;
const Settings = () => <div>Settings Page</div>;

const App = () => {
  return (
    <Router>
      {/* Define your routes here */}
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
