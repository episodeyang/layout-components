"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Width;

var _react = require("react");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Width(_props) {
  var component = _props.component;
  var style = _props.style;
  var _props$children = _props.children;
  var children = _props$children === undefined ? null : _props$children;
  var width = _props.width;
  var block = _props.block;
  var inlineBlock = _props.inlineBlock;

  var props = _objectWithoutProperties(_props, ["component", "style", "children", "width", "block", "inlineBlock"]);

  var thisStyle = {
    flex: "0 0 auto",
    position: "relative",
    width: "" + width,
    boxSizing: "border-box"
  };
  if (block) thisStyle.display = "block";
  if (inlineBlock) thisStyle.display = "inline-block";
  var thisProps = _extends({}, props, { style: _extends({}, thisStyle, style) });
  if (component) return (0, _react.createElement)(component, thisProps, children);else return (0, _react.cloneElement)(children, thisProps);
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Width, "Width", "src/Width.js");
})();

;