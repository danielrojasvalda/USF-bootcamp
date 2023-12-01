const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to search for matching fruits based on input value
function search(str) {
	
	return fruit.filter(function(item) {
	    return item.toLowerCase().includes(str);
	});
}   
  
// Event handler for the 'keyup' event on the input element
function searchHandler(e) {
    const inputVal = (e.target.value).toLowerCase();
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	results.forEach(function(result) {
	    const li = document.createElement('li');
	    li.textContent = result;
	    suggestions.appendChild(li);
	});
  
	// Show or hide the suggestions based on input value
	// condition if (inputVal) display block else none)
	suggestions.style.display = inputVal ? 'block' : 'none';
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        // Set the value of the input field to the selected suggestion
        input.value = e.target.textContent;
      // Hide the suggestions
    suggestions.style.display = 'none';
  }
}
// Event listener for the 'keyup' event on the input element
input.addEventListener('keyup', searchHandler);

// Event listener for the 'click' event on the suggestions list
suggestions.addEventListener('click', useSuggestion);
