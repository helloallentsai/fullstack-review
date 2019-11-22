const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected')
});

let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  reponame: String,
  repourl: String,
  popularity: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports = db;
module.exports.save = save;