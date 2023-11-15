/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const MarkovMachine = require('./markov');

async function getTextFromPath(pathOrURL) {
  try {
    if (pathOrURL.startsWith('http')) {
      const response = await axios.get(pathOrURL);
      return response.data;
    } else {
      return fs.readFileSync(pathOrURL, 'utf-8');
    }
  } catch (error) {
    throw `Error reading ${pathOrURL}:\n${error.message}`;
  }
}

function generateText(text) {
  const markovMachine = new MarkovMachine(text);
  return markovMachine.makeText();
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Usage: node makeText.js <file/url> <path>');
    process.exit(1);
  }

  const pathOrURL = args[1];

  getTextFromPath(pathOrURL)
    .then((text) => {
      const generatedText = generateText(text);
      console.log(generatedText);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

main();
