"use strict";

exports.__esModule = true;
exports.default = FlexSpacer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FlexItem = require("./FlexItem");

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Created by ge on 12/11/16. */
function FlexSpacer(props) {
  return _react2.default.createElement(_FlexItem2.default, { fluid: true });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlexSpacer, "FlexSpacer", "src/FlexSpacer.js");
})();

;