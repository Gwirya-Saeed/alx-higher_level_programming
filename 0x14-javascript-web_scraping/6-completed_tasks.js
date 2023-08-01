#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
    return;
  }

  const tasks = JSON.parse(body);
  const completedTasksPerUser = {};

  tasks.forEach(function (task) {
    if (task.completed) {
      if (completedTasksPerUser[task.userId]) {
        completedTasksPerUser[task.userId]++;
      } else {
        completedTasksPerUser[task.userId] = 1;
      }
    }
  });
  console.log(completedTasksPerUser);
});
