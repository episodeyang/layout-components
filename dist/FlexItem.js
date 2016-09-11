"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /** Created by ge on 4/24/16. */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styleGlobals = require("./style-globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var any = _react.PropTypes.any;
var FlexItem = (_temp = _class = function (_Component) {
  _inherits(FlexItem, _Component);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FlexItem.prototype.componentWillUnmount = function componentWillUnmount() {};

  FlexItem.prototype.render = function render() {
    var flexStyle;
    var _props = this.props;
    var Component = _props.component;
    var style = _props.style;
    var fluid = _props.fluid;
    var fixed = _props.fixed;
    var width = _props.width;
    var height = _props.height;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ["component", "style", "fluid", "fixed", "width", "height", "children"]);

    if (fluid) flexStyle = _styleGlobals.flexFluid;
    if (fixed) flexStyle = _styleGlobals.flexFixed;
    return _react2.default.createElement(
      Component,
      _extends({}, props, { ref: "container", width: width, height: height, style: _extends({}, flexStyle, style, { width: width, height: height }) }),
      children
    );
  };

  return FlexItem;
}(_react.Component), _class.propTypes = {
  /** if a component is passed in, then it is used to substitute the `div` container */
  component: any,
  /** if the component is fluid (width/height) */
  fluid: any,
  /** if the component is fixed (width/height) */
  fixed: any,
  /**  width e.g. `100px`, `50%`, `40em` etc. */
  width: any,
  /** height e.g. `100px`, `50%`, `40em` etc. */
  height: any,
  /** style of component */
  style: any,
  children: any
}, _class.defaultProps = {
  component: 'div',
  style: {}
}, _temp);
exports.default = FlexItem;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/FlexItem.js");

  __REACT_HOT_LOADER__.register(any, "any", "src/FlexItem.js");

  __REACT_HOT_LOADER__.register(FlexItem, "FlexItem", "src/FlexItem.js");
})();

;