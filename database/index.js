const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected')
});

let repoSchema = mongoose.Schema({
  id: { type : Number , unique : true, dropDups: true },
  username: String,
  reponame: String,
  repourl: String,
  popularity: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (entries) => {

  entries = JSON.parse(entries);

  const data = [];
  entries.forEach(entry => {
    data.push({
      id: entry.id,
      username: entry.owner.login,
      reponame: entry.name,
      repourl: entry.html_url,
      popularity: entry.watchers_count,
    });
  });

  Repo.collection.insert(data[0], (err, docs) => {
    console.log('data inserted');
    console.log(docs);
  })
  // Repo.collection.insert(data, (err, docs) => {
  //   console.log('data inserted');
  //   console.log(docs);
  // })
  // db.fetcher.insert(data[0]);
  // db.fetcher.insertMany(data);

}

module.exports = db;
module.exports.save = save;