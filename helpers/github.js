const request = require('request');
// const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${TOKEN}`,
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };

  request(options, (callback));

}

module.exports.getReposByUsername = getReposByUsername;