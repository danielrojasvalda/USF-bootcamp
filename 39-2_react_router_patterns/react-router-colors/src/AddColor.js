import React, { useState } from 'react';

const AddColor = ({ addColor }) => {
  const [colorName, setColorName] = useState('');
  const [colorPalette, setColorPalette] = useState('blue');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name: colorName, palette: colorPalette });
    setColorName('');
    setColorPalette('blue');
  };

  return (
    <div>
      <h2>Add Color</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name:</label>
        <input
          id="colorName"
          type="text"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="colorPalette">Select color:</label>
        <select
          id="colorPalette"
          value={colorPalette}
          onChange={(e) => setColorPalette(e.target.value)}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
        <br />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default AddColor;
