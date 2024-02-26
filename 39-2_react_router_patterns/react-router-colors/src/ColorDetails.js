// ColorDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ColorDetails = () => {
  const { color } = useParams();

  return (
    <div style={{ backgroundColor: color, textAlign: 'center', padding: '20px' }}>
      <h1>This is {color}, isn't it beautiful?</h1>
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>Go back</Link>
    </div>
  );
};

export default ColorDetails;
