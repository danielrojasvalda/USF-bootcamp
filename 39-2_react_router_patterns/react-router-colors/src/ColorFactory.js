// ColorFactory.js
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import ColorForm from './ColorForm';
import ColorDetails from './ColorDetails';

const ColorFactory = () => {
  const [colors, setColors] = useState(['blue', 'red']);
  const navigate = useNavigate();

  const addColor = (color) => {
    setColors([...colors, color]);
    navigate('/');
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home colors={colors} />}
        />
        <Route
          path="/colors/new"
          element={<ColorForm addColor={addColor} />}
        />
        <Route
          path="/colors/:color"
          element={<ColorDetails colors={colors} />}
        />
      </Routes>
    </div>
  );
};

export default ColorFactory;
