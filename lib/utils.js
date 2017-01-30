"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shuffle = exports.shuffle = function shuffle(array) {
  var d = array;
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
};