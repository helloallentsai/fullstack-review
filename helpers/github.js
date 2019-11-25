const request = require('request');
const db = require('../database/index.js')

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`,
      // 'Accept': 'application/vnd.github.v3+json',
    }
  };

  return new Promise((resolve, reject) => {

    request(options, (err, res, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });

}

module.exports.getReposByUsername = getReposByUsername;