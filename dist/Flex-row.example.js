"use strict";

exports.__esModule = true;
exports.default = FlexRowExample;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexRowExample() {
  return _react2.default.createElement(
    "div",
    { className: "example-container" },
    _react2.default.createElement(
      "h4",
      null,
      "Flex row example"
    ),
    _react2.default.createElement(
      _.Flex,
      { row: true },
      _react2.default.createElement(
        _.FlexItem,
        { fixed: true, width: "200px", style: { backgroundColor: "gray" } },
        "this is a fixed column with width of 200px"
      ),
      _react2.default.createElement(
        _.FlexItem,
        { fluid: true, style: { backgroundColor: "red" } },
        "this is a fluid column"
      )
    )
  );
} /** Created by ge on 4/24/16. */

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlexRowExample, "FlexRowExample", "src/Flex-row.example.js");
})();

;