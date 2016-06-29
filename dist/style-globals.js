"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Created by ge on 4/18/16. */
var flexRow = exports.flexRow = {
  display: "flex",
  flexDirection: "row"
};
var flexColumn = exports.flexColumn = {
  display: "flex",
  flexDirection: "column"
};
var flexFixed = exports.flexFixed = {
  position: "relative", // so that children can fill
  flex: "0 0 auto"
};
var flexFluid = exports.flexFluid = {
  position: "relative", // so that children can fill
  flex: "1 1 auto"
};