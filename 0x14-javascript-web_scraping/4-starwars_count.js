#!/usr/bin/node

const request = require('request');

const apiURL = 'https://swapi-api.alx-tools.com/api/films/';
const characterID = 18;

request(apiURL, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterID}/`)) {
        count++;
      }
    }
    console.log(count);
  } else {
    console.error(error);
  }
});
