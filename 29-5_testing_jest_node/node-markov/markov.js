/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }
  

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};
    for (let i = 0; i < this.words.length - 1; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1];
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord);
    }  
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const startIdx = Math.floor(Math.random() * (this.words.length - 1));
    let currentWord = this.words[startIdx];
    let generatedText = [currentWord];

    for (let i = 1; i < numWords; i++) {
      const possibleNextWords = this.chains[currentWord];
      if (!possibleNextWords || possibleNextWords.length === 0) {
        break;
      }
      const nextWordIdx = Math.floor(Math.random() * possibleNextWords.length);
      const nextWord = possibleNextWords[nextWordIdx];
      if (nextWord === null) {
        break;
      }
      generatedText.push(nextWord);
      currentWord = nextWord;
    }

    return generatedText.join(' ');
  }  
}

// Example usage:
let mm = new MarkovMachine("the cat in the hat");
console.log(mm.makeText());

module.exports = MarkovMachine;

