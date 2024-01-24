const fs = require('fs');
const axios = require('axios');

async function readPath(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading ${path}:\n${err}`);
      } else {
        resolve(data);
      }
    });
  });
}

async function fetchURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw `Error fetching ${url}:\n${error}`;
  }
}

async function writeToFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(`Couldn't write ${path}:\n${err}`);
      } else {
        resolve();
      }
    });
  });
}

async function cat(path, outputFileName) {
  try {
    const data = await readPath(path);
    if (outputFileName) {
      await writeToFile(outputFileName, data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

async function webCat(url, outputFileName) {
  try {
    const data = await fetchURL(url);
    if (outputFileName) {
      await writeToFile(outputFileName, data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

const args = process.argv.slice(2);

if (args.includes('--out')) {
  const outIndex = args.findIndex((arg) => arg === '--out');
  const outputFileName = args[outIndex + 1];
  const pathOrURL = args[outIndex + 2];

  if (outputFileName && pathOrURL) {
    if (pathOrURL.startsWith('http')) {
      webCat(pathOrURL, outputFileName);
    } else {
      cat(pathOrURL, outputFileName);
    }
  } else {
    console.error('Please provide a valid file path or URL.');
  }
} else {
  const pathOrURL = args[0];
  if (pathOrURL) {
    if (pathOrURL.startsWith('http')) {
      webCat(pathOrURL);
    } else {
      cat(pathOrURL);
    }
  } else {
    console.error('Please provide a valid file path or URL.');
  }
}

