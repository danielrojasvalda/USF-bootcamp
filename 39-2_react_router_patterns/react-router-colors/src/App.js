// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import AddColor from './AddColor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/:color" element={<ColorDetails />} />
        <Route path="/colors/new" element={<AddColor />} />
      </Routes>
    </Router>
  );
};

export default App;
