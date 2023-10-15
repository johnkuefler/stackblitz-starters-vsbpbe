const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Server received: Username - ${username}, Password - ${password}`);
});

app.post('/calculate', (req, res) => {
  let firstNumber = Number(req.body.firstNumber);
  let secondNumber = Number(req.body.secondNumber);
  let result = firstNumber + secondNumber;
  res.send(`Result is - ${result}`);
});

app.get('/test', (req, res) => {
  res.send('hi there');
});

app.listen(3000);
