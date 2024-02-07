import React from 'react';

function Box({ box, index, removeBox }) {
  return (
    <div
      style={{
        backgroundColor: box.backgroundColor,
        width: `${box.width}px`,
        height: `${box.height}px`,
        display: 'inline-block',
        margin: '10px',
      }}
    >
      <button onClick={() => removeBox(index)}>X</button>
    </div>
  );
}

export default Box;