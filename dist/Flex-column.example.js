"use strict";

exports.__esModule = true;
exports.default = FlexColumnExample;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexColumnExample() {
  return _react2.default.createElement(
    "div",
    { className: "example-container", style: { position: "relative" } },
    _react2.default.createElement(
      "h4",
      null,
      "Flex column example"
    ),
    _react2.default.createElement(
      _.Flex,
      { column: true, style: { height: "200px" } },
      _react2.default.createElement(
        _.FlexItem,
        { fixed: true, height: "50px", style: { backgroundColor: "gray" } },
        "this is a fixed column with height of 500px."
      ),
      _react2.default.createElement(
        _.FlexItem,
        { fluid: true, style: { backgroundColor: "#23aaff" } },
        _react2.default.createElement("br", null)
      )
    )
  );
} /** Created by ge on 4/24/16. */

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlexColumnExample, "FlexColumnExample", "src/Flex-column.example.js");
})();

;