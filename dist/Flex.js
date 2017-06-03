'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Flex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleGlobals = require('./style-globals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** Created by ge on 4/24/16. */


function Flex(_props) {
  var _props$component = _props.component;
  var component = _props$component === undefined ? "div" : _props$component;
  var style = _props.style;
  var row = _props.row;
  var column = _props.column;
  var fill = _props.fill;
  var align = _props.align;
  var justify = _props.justify;
  var _props$children = _props.children;
  var children = _props$children === undefined ? [] : _props$children;

  var props = _objectWithoutProperties(_props, ['component', 'style', 'row', 'column', 'fill', 'align', 'justify', 'children']);

  var Tag = component;
  var thisStyle = void 0;
  if (column) thisStyle = _styleGlobals.flexColumn;
  if (row) thisStyle = _styleGlobals.flexRow;
  if (fill) thisStyle = _extends({}, thisStyle, {
    position: "absolute",
    top: 0, bottom: 0, left: 0, right: 0
  });
  if (align) thisStyle.alignItems = align;
  if (justify) thisStyle.justifyContent = justify;
  return _react2.default.createElement(
    Tag,
    _extends({ style: _extends({}, thisStyle, style) }, props),
    children
  );
}

var any = _propTypes2.default.any;
var bool = _propTypes2.default.bool;
var string = _propTypes2.default.string;

Flex.prototype.propTypes = {
  /** an optional */
  component: any,
  row: any,
  column: any,
  fill: bool,
  /** one of center, start, end */
  align: string,
  /** one of stretch, center, start, end */
  justify: string,
  style: any
};
Flex.prototype.defaultProps = {
  component: "div"
};
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Flex, 'Flex', 'src/Flex.js');

  __REACT_HOT_LOADER__.register(any, 'any', 'src/Flex.js');

  __REACT_HOT_LOADER__.register(bool, 'bool', 'src/Flex.js');

  __REACT_HOT_LOADER__.register(string, 'string', 'src/Flex.js');
})();

;