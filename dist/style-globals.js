"use strict";

exports.__esModule = true;
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
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(flexRow, "flexRow", "src/style-globals.js");

  __REACT_HOT_LOADER__.register(flexColumn, "flexColumn", "src/style-globals.js");

  __REACT_HOT_LOADER__.register(flexFixed, "flexFixed", "src/style-globals.js");

  __REACT_HOT_LOADER__.register(flexFluid, "flexFluid", "src/style-globals.js");
})();

;