const express = require('express');
const app = express();

// Enable CORS for all origins (you can also specify a specific origin)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins (for development only)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
