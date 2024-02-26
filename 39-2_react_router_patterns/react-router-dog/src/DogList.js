import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>
            <img src={dog.src} alt={dog.name} />
            <p>{dog.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
