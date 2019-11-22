const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log(username);
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };
  console.log(options.url);

  request(options, (err, res, data) => {
    if (err) {
      console.log(err);
    }
    db.save(data);
  });

}

module.exports.getReposByUsername = getReposByUsername;