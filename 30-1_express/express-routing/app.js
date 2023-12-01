const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === 'InvalidNumberError') {
    return res.status(400).json({ error: `${err.value} is not a number.` });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
});

// Mean route
app.get('/mean', (req, res, next) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = parseNumbers(nums);

  if (numbers.error) {
    return next({ name: 'InvalidNumberError', value: numbers.error });
  }

  const mean = calculateMean(numbers);

  res.json({ operation: 'mean', value: mean });
});

// Median route
app.get('/median', (req, res, next) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = parseNumbers(nums);

  if (numbers.error) {
    return next({ name: 'InvalidNumberError', value: numbers.error });
  }

  const median = calculateMedian(numbers);

  res.json({ operation: 'median', value: median });
});

// Mode route
app.get('/mode', (req, res, next) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = parseNumbers(nums);

  if (numbers.error) {
    return next({ name: 'InvalidNumberError', value: numbers.error });
  }

  const mode = calculateMode(numbers);

  res.json({ operation: 'mode', value: mode });
});


// Helper function to parse numbers
function parseNumbers(nums) {
  const numArray = nums.split(',').map(num => parseFloat(num));

  for (const num of numArray) {
    if (isNaN(num)) {
      return { error: num };
    }
  }

  return numArray;
}

// Helper function to calculate mean
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Helper function to calculate median
function calculateMedian(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const middle = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
  } else {
    return sortedNumbers[middle];
  }
}

// Helper function to calculate mode
function calculateMode(numbers) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mode = [];

  for (const num of numbers) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = [num];
    } else if (frequencyMap[num] === maxFrequency) {
      mode.push(num);
    }
  }

  return mode;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;  // Export the app for testing purposes
