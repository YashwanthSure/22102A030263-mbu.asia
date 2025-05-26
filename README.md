# Backend Assignment - Problem 1 & Problem 2

## Problem 1: Average Calculator API

- **Backend:** Node.js + Express
- **What it does:**  
  Fetches numbers from different sources (prime, fibonacci, even, random), keeps the last 10 unique numbers, and returns their average.
- **How to run:**
  1. Go to the `problem1` folder.
  2. Install dependencies:  
     `npm install`
  3. Start the server:  
     `npm start`
  4. Open `index.html` in your browser to use the frontend.

- **API Example:**  
  `GET http://localhost:9876/numbers/p`  
  Returns the sliding window and average for primes.

---

## Problem 2: Stock Price Aggregation Demo

- **Frontend:** Simple HTML + JavaScript
- **What it does:**  
  Lets you enter stock tickers and minutes, then shows:
    - The average price for a stock (using random demo data)
    - The correlation between two stocks (using random demo data)
- **How to run:**
  1. Open `problem2/index.html` in your browser.
  2. Enter stock tickers and minutes, then click the buttons to see results.

---

**Note:**  
- Problem 2 uses random data for demonstration.  
- For real data, connect to a backend or stock API.

---
