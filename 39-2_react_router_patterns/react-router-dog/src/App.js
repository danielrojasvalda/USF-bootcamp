import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App({ dogs }) {
  return (
    <div>
      <Nav dogs={dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default App;
