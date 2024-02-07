import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (index) => {
    const updatedBoxes = [...boxes];
    updatedBoxes.splice(index, 1);
    setBoxes(updatedBoxes);
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box key={index} index={index} box={box} removeBox={removeBox} />
      ))}
    </div>
  );
}

export default BoxList;