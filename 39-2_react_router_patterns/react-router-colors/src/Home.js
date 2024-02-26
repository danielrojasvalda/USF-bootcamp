// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ColorList from './ColorList'; // Assuming ColorList.js is in the same directory

const Home = () => {
  const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple'];

  return (
    <div>
      <header style={{ backgroundColor: 'darkgray', color: 'white', textAlign: 'center', padding: '1rem 0' }}>
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new">Add Color</Link>
      </header>
      <ColorList colors={colors} />
    </div>
  );
};

export default Home;
