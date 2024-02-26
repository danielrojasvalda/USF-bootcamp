import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ dogs }) {
  return (
    <nav>
      {dogs.map((dog, index) => (
        <React.Fragment key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>
            {dog.name}
          </Link>
          {index < dogs.length - 1 && " "} {/* Add space if not the last dog */}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Nav;
