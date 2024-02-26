// ColorList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h2>Select color</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
