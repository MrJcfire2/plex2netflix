'use strict';

const got = require('got');
const axios = require('axios').default;

module.exports = function(media) {

  return new Promise((resolve, reject) => {
    axios.get(`http://127.0.0.1:${process.env.P2N_PORT}/search`, {
      params: {
        title: media.title,
        year: media.year,
      },
    })
      .then(response => {
        const available = response.data.available;
        resolve([media, available]);
      })
      .catch(err => {
        reject(err);
      });
  });
};
