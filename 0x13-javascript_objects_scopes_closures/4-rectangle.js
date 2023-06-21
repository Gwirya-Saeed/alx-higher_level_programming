#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
    if (h <= 0 || w <= 0) {
      return {};
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    const temp = this.width;
    const temp2 = this.height;
    this.height = temp;
    this.width = temp2;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
