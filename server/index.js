const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const helper = require('../helpers/github.js');

let app = express();


app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const { username } = req.body;

  return new Promise((resolve, reject) => {
    resolve(helper.getReposByUsername(username));
  })
    .then(res.end('Thanks'));

});

app.get('/repos', function (req, res) {

  db.get()
    .then(data => res.send(data));

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



