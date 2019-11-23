const request = require('request');
const db = require('../database/index.js')

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`,
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };

  request(options, (callback));

}

module.exports.getReposByUsername = getReposByUsername;