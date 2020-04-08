/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const cases = require('./cases.mock');
const tweets = require('./tweets.mock');
const timeline = require('./timeline.mock');
const fatalityRate = require('./fatality-rate.mock');

const app = express();
app.use(cors());

app.get('/api/cases', (req, res) => {
  res.json(cases);
});

app.get('/api/tweets', (req, res) => {
  res.json(tweets);
});

app.get('/api/timeline', (req, res) => {
  res.json(timeline);
});

app.get('/api/fatality-rate', (req, res) => {
  res.json(fatalityRate);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
