const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });


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

let save = (entries, callback) => {
  console.log(3);
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
  // console.log(data);
  Repo.collection.insert(data, (err, docs) => {
    callback(null, 1)
  });
}

let get = () => {
  return new Promise((resolve, reject) => {
    Repo
      .find({})
      .sort({popularity: -1})
      .limit(25)
      .exec((err, docs) => {
        resolve(docs);
      });
  });
}

module.exports = db;
module.exports.save = save;
module.exports.get = get;