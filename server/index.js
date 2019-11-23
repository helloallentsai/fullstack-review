const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
require('dotenv').config();
const db = require('../database/index.js');
const helper = require('../helpers/github.js');

let app = express();


app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const { username } = req.body;

  helper.getReposByUsername(username, (err1, response, data) => {
    if (err1) {
    }
    db.save(data, (err2, result) => {
      if (err2) {
        console.log(err2);
      }
      res.send('Thanks');
    });
  })

});

app.get('/repos', function (req, res) {

  db.get()
    .then(data => res.send(data));

});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



