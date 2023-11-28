// Function to make a request to the Numbers API
async function getNumberFact(number) {
  const response = await fetch(`http://numbersapi.com/${number}?json`);
  const data = await response.json();
  return data.text;
}

// Function to display number facts on the page
async function displayNumberFacts() {
  const favoriteNumber = 7;  // Change this to your favorite number
  const numberOfFacts = 4;

  const numberFactsContainer = document.getElementById("numberFacts");

  try {
      // Task 1: Get a fact about your favorite number
      const fact1 = await getNumberFact(favoriteNumber);
      numberFactsContainer.innerHTML += `<p>${favoriteNumber}: ${fact1}</p>`;

      // Task 2: Get data on multiple numbers in a single request
      const numbersToFetch = [3, 42, 100];  // Example numbers
      const requests = numbersToFetch.map((number) => getNumberFact(number));
      const facts = await Promise.all(requests);
      facts.forEach((fact, index) => {
          numberFactsContainer.innerHTML += `<p>${numbersToFetch[index]}: ${fact}</p>`;
      });

      // Task 3: Get 4 facts on your favorite number
      const favoriteNumberFacts = await Promise.all(Array(numberOfFacts).fill(favoriteNumber).map(getNumberFact));
      favoriteNumberFacts.forEach((fact) => {
          numberFactsContainer.innerHTML += `<p>${favoriteNumber}: ${fact}</p>`;
      }
      );
  } catch (error) {
      console.error("Error fetching number facts:", error);
  }
}

// Call the function to display number facts when the page loads
displayNumberFacts();
