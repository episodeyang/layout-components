"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlexExample;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexExample(_props) {
  return _react2.default.createElement(
    _.Flex,
    null,
    _react2.default.createElement(
      _.FlexItem,
      { fixed: true, width: "100px", style: { backgroundColor: "gray" } },
      "this is a fixed column with width of 100px"
    ),
    _react2.default.createElement(
      _.FlexItem,
      { fluid: true, width: "100px", style: { backgroundColor: "red" } },
      "this is a fixed column with width of 100px"
    )
  );
} /** Created by ge on 4/24/16. */