#!/usr/bin/node

let numCheck = process.argv[2];
numCheck = Number(numCheck);

if (!Number.isInteger(numCheck)) {
  console.log('Not a number');
} else if (Number.isInteger(numCheck) === true && process.argv.length >= 2) {
  console.log('My number:', numCheck);
}
