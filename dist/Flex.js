"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Flex;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styleGlobals = require("./style-globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** Created by ge on 4/24/16. */


function Flex(_props) {
  var _props$tagName = _props.tagName;
  var tagName = _props$tagName === undefined ? "div" : _props$tagName;
  var style = _props.style;
  var row = _props.row;
  var column = _props.column;
  var fill = _props.fill;
  var align = _props.align;
  var _props$children = _props.children;
  var children = _props$children === undefined ? [] : _props$children;

  var props = _objectWithoutProperties(_props, ["tagName", "style", "row", "column", "fill", "align", "children"]);

  var Tag = tagName;
  var thisStyle;
  if (column) thisStyle = _styleGlobals.flexColumn;
  if (row) thisStyle = _styleGlobals.flexRow;
  if (fill) thisStyle = _extends({}, thisStyle, {
    position: "absolute",
    top: 0, bottom: 0, left: 0, right: 0
  });
  if (align) thisStyle.alignItems = align;
  return _react2.default.createElement(
    Tag,
    _extends({ style: _extends({}, thisStyle, style) }, props),
    children
  );
}

var any = _react.PropTypes.any;
var bool = _react.PropTypes.bool;
var string = _react.PropTypes.string;

Flex.prototype.propTypes = {
  /** an optional */
  tagName: string,
  row: any,
  column: any,
  fill: bool,
  align: string,
  style: any
};
Flex.prototype.defaultProps = {
  tagName: "div"
};