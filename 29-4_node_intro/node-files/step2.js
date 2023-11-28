const fs = require('fs');
const axios = require('axios');

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:`);
      console.error(`  ${err}`);
      return;
    }
    console.log(data);
  });
}

async function webCat(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching ${url}:`);
    console.error(`  ${error}`);
  }
}

const arg = process.argv[2];

if (!arg) {
  console.error('Please provide a file path or URL.');
} else if (arg.startsWith('http')) {
  webCat(arg);
} else {
  cat(arg);
}
