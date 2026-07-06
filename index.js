const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, Cypress!</h1>');
});

app.listen(3000, () => {
  console.log('✅ Serwer działa na http://localhost:3000');
});

