const fs = require('fs');

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

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path.');
} else {
  cat(filePath);
}
