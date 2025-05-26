const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this line
const app = express();
const window_size = 10;
let numbers = [];

app.use(cors()); // Add this line

const endpoints = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibo',
  e: 'http://20.244.56.144/test/even',
  r: 'http://20.244.56.144/test/rand'
};

app.get('/numbers/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  if (!['p', 'f', 'e', 'r'].includes(numberId)) {
    return res.status(400).json({ error: 'Invalid numberId' });
  }
  let newNumbers = [];
  try {
    const response = await axios.get(endpoints[numberId], { timeout: 500 });
    newNumbers = response.data.numbers;
  } catch (error) {
    console.error(error);
  }
  numbers = [...new Set([...numbers, ...newNumbers])];
  if (numbers.length > window_size) {
    numbers = numbers.slice(-window_size);
  }
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length || 0;
  res.json({
    windowPrevState: numbers.slice(0, -newNumbers.length),
    windowCurrState: numbers,
    numbers: newNumbers,
    avg
  });
});

app.listen(9876, () => {
  console.log('Server listening on port 9876');
});