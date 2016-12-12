"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** Created by ge on 12/11/16. */


exports.default = FlexSpacer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FlexItem = require("./FlexItem");

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexSpacer(props) {
  return _react2.default.createElement(_FlexItem2.default, _extends({ fluid: true }, props));
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlexSpacer, "FlexSpacer", "src/FlexSpacer.js");
})();

;