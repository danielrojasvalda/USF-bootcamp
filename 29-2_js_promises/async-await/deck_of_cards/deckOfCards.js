let deckId;
let remainingCards;

// Function to create a new deck
async function createNewDeck() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await response.json();
    deckId = data.deck_id;
    remainingCards = data.remaining;
    document.getElementById("newDeckBtn").disabled = true;
    document.getElementById("drawCardBtn").disabled = false;
}

// Function to draw a card from the deck
async function drawCard() {
    if (remainingCards === 0) {
        alert("No cards left in the deck!");
        return;
    }

    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();
    const card = data.cards[0];

    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;

    remainingCards = data.remaining;
    if (remainingCards === 0) {
        document.getElementById("drawCardBtn").disabled = true;
    }
}

// Event listeners
document.getElementById("newDeckBtn").addEventListener("click", createNewDeck);
document.getElementById("drawCardBtn").addEventListener("click", drawCard);
