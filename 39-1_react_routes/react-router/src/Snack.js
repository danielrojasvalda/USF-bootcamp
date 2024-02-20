import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';
import chipsImg from './images/chips.jpg';
import sardinesImg from './images/sardines.jpg';
import sodaImg from './images/soda.jpg';

function Snack() {
  const { id } = useParams();

  const [bagsEaten, setBagsEaten] = useState(0);

  let snackName, message, imgSrc, content;
  if (id === '1') {
    snackName = 'Chips';
    imgSrc = chipsImg;

    const handleNomNom = () => {
      setBagsEaten(bagsEaten + 1);
    };

    content = (
      <div className="snack">
        <img src={imgSrc} alt={snackName} />
        <h2>{snackName}</h2>
        <p>Bags eaten: {bagsEaten}</p>
        <button onClick={handleNomNom}>Nom Nom Nom</button>
        <br />
        <Link to="/">Go back</Link>
      </div>
    );
  } else if (id === '2') {
    snackName = 'Fresh Sardines';
    message = "You don't eat the sardines. The sardines, they eat you!";
    imgSrc = sardinesImg;
  } else if (id === '3') {
    snackName = 'Soda';
    message = 'OMG sugarrrrr';
    imgSrc = sodaImg;
  }

  if (!content) {
    content = (
      <div className="snack">
        <img src={imgSrc} alt={snackName} />
        <h2>{snackName}</h2>
        {message && <p>{message}</p>}
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return content;
}

export default Snack;
