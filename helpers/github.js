const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (username) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };

  request(options, (err, res, data) => {
    if (err) {
      console.log(err);
    }
    db.save(data);
  });

}

module.exports.getReposByUsername = getReposByUsername;