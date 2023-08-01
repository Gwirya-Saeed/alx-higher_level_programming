#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const stringToPrint = process.argv[3];

fs.writeFile(filePath, stringToPrint, 'utf-8', (err) => {
  if (err) {
    return console.error(err);
  }
});
