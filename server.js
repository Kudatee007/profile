const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3500;

const access_code = process.env.ACCESS_CODE
const link = process.env.ACCESS_LINK
app.use(cors());
app.use(bodyParser.json());

// Example endpoint for generating the Telegram link
app.post('/generate-link', (req, res) => {
  // Check if the provided input is 'raylene'
  const inputValue = req.body.inputValue;
  if (inputValue.trim().toLowerCase() == access_code) {
    // If it is, generate the Telegram link
    const telegramLink = link;
    res.json({ success: true, telegramLink });
  } else {
    // If not, return an error
    res.json({ success: false, message: 'Access code not correct.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});