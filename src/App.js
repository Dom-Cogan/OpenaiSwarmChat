import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";
import Profiles from "./pages/profiles/profiles";

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
};

export default App;
