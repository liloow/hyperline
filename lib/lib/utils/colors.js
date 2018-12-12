"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorList = getColorList;
exports.colorExists = colorExists;
// Taken from https://github.com/zeit/hyper/blob/master/lib/utils/colors.js
// Effect of this script is the reverse of colors.js in hyper.app
var colorList = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'lightBlack', 'lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightWhite', 'colorCubes', 'grayscale'];

function getColorList(colors) {
  // For forwards compatibility, return early if it's already an object
  if (!Array.isArray(colors)) {
    return colors;
  } // For backwards compatibility


  var colorsList = {};
  colors.forEach(function (color, index) {
    colorsList[colorList[index]] = color;
  });
  return colorsList;
}

function colorExists(name) {
  return colorList.indexOf(name) !== -1;
}