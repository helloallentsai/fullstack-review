const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const mongo = require('../database/index.js');

let app = express();


app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body);
  res.end('Thanks')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


/*
When a user types in a GitHub username and submits the form, your app should:

Send a POST request to your express server
Your server should GET that user's repos from GitHub's API
Your server should then save the repos to the database
When a user visits / refreshes your page, your app should:

GET the top (how will you determine top?) 25 repos in your express server's database
Take those repos and display them on the page
*/

