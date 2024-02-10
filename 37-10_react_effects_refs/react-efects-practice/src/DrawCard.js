import React, { useState, useEffect } from 'react';

const DrawCard = () => {
  const [deckId, setDeckId] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const [error, setError] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [shuffling, setShuffling] = useState(false);

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
      setCurrentCard(null);
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

  const shuffleDeck = async () => {
    setShuffling(true);
    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      const data = await response.json();
      if (data.success) {
        setRemaining(52);
        setCurrentCard(null);
        setError(null);
      } else {
        setError('Error shuffling deck');
      }
    } catch (error) {
      setError('Error shuffling deck');
    }
    setShuffling(false);
  };

  return (
    <div>
      <button onClick={drawCard} disabled={shuffling}>Draw a Card</button>
      <button onClick={shuffleDeck} disabled={shuffling}>Shuffle Deck</button>
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
