"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shuffle = exports.shuffle = function shuffle(array) {
  var d = array.slice();
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
};

var move = exports.move = function move(array) {
  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return [].concat(array.slice(steps), array.slice(0, steps));
};

var getFirst = exports.getFirst = function getFirst(array) {
  return array[0];
};