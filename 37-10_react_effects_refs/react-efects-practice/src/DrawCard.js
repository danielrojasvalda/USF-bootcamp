import React, { useState, useEffect } from 'react';

const DrawCard = () => {
  const [deckId, setDeckId] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const [error, setError] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    fetchNewDeck();
  }, []);

  const fetchNewDeck = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
      const data = await response.json();
      setDeckId(data.deck_id);
      setRemaining(data.remaining);
      setError(null);
    } catch (error) {
      setError('Error fetching new deck');
    }
  };

  const drawCard = async () => {
    if (remaining === 0) {
      setError('Error: no cards remaining!');
      return;
    }

    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
      const data = await response.json();
      if (data.success) {
        setCurrentCard(data.cards[0]);
        setRemaining(data.remaining);
        setError(null);
      } else {
        setError('Error drawing card');
      }
    } catch (error) {
      setError('Error drawing card');
    }
  };

  return (
    <div>
      <button onClick={drawCard}>Draw a Card</button>
      {error && <p>{error}</p>}
      {currentCard && (
        <div>
          <img src={currentCard.image} alt={currentCard.code} />
        </div>
      )}
    </div>
  );
};

export default DrawCard;
