"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Row;

var _react = require("react");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** Created by ge on 4/24/16. */


var thisStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  width: "100%"
};
function Row(_props) {
  var tagName = _props.tagName;
  var style = _props.style;
  var _props$children = _props.children;
  var children = _props$children === undefined ? null : _props$children;

  var props = _objectWithoutProperties(_props, ["tagName", "style", "children"]);

  var thisProps = _extends({}, props, { style: _extends({}, thisStyle, style) });
  if (tagName) {
    return (0, _react.createElement)(tagName, thisProps, children);
  } else {
    if (children.length > 1) throw new Error("when used as a abstract container, can have only one child");
    return (0, _react.cloneElement)(children, thisProps);
  }
}