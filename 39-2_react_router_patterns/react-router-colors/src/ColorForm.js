import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { SketchPicker } from 'react-color';

const ColorForm = ({ addColor }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [palette, setPalette] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleAddColor = () => {
    if (!name || (!color && palette.length === 0)) {
      alert('Please enter a name and select a color or palette.');
      return;
    }

    const newColor = {
      id: uuidv4(),
      name: name.trim(),
      color: color,
      palette: palette,
    };

    addColor(newColor);
    history.push('/');
  };

  const handleAddToPalette = () => {
    if (!color) {
      alert('Please select a color to add to the palette.');
      return;
    }

    setPalette((prevPalette) => [...prevPalette, color]);
    setColor('');
  };

  return (
    <div>
      <h2>Add a Color</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Color:
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </label>
      <br />
      <button onClick={handleAddToPalette}>Add to Palette</button>
      <br />
      <label>Palette:</label>
      {palette.map((p, index) => (
        <div key={index} style={{ backgroundColor: p, width: '20px', height: '20px', display: 'inline-block' }}></div>
      ))}
      <br />
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
};

export default ColorForm;
