#!/usr/bin/node

const request = require('request');

const path = process.argv[2];

request(path, (error, response) => {
  if (error) {
    console.log(error);
  }
  console.log(`code: ${response.statusCode}`);
});
