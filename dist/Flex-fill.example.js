"use strict";

exports.__esModule = true;
exports.default = FlexFillExample;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexFillExample() {
  return _react2.default.createElement(
    "div",
    { className: "example-container", style: { position: "relative", width: "300px", height: "200px", border: "solid 4px rgba(255, 0, 0, 0.2)" } },
    _react2.default.createElement(
      "h4",
      null,
      "Flex Fill example"
    ),
    _react2.default.createElement(
      "p",
      null,
      "flex box will fill the container with ",
      _react2.default.createElement(
        "code",
        null,
        "position: abstract"
      )
    ),
    _react2.default.createElement(
      _.Flex,
      { column: true, fill: true },
      _react2.default.createElement(
        _.FlexItem,
        { fixed: true, height: "50px", style: { backgroundColor: "gray" } },
        "this is a fixed column with height of 500px."
      ),
      _react2.default.createElement(
        _.FlexItem,
        { fluid: true, style: { backgroundColor: "#23aaff" } },
        "this is the fluid container."
      )
    )
  );
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlexFillExample, "FlexFillExample", "src/Flex-fill.example.js");
})();

;