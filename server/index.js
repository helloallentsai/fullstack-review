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
  helper.getReposByUsername(username);
  res.end('Thanks')
});

app.get('/repos', function (req, res) {
  // console.log
  // console.log(db.Repo.find({}).sort({popularity: -1}));
  db.get().then(data => res.send(data));
  // res.send(db.get());
  // let test = JSON.stringify('testing');
  // res.send(test);

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



