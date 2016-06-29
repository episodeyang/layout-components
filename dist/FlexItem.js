"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexItem).apply(this, arguments));
  }

  _createClass(FlexItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.container = _reactDom2.default.findDOMNode(this.refs["DIV"]);
      var width = this.props.width;

      if (width) this.setWidth(width);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var width = newProps.width;

      if (width) this.setWidth(width);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.container.style.width = width;
    }
  }, {
    key: "render",
    value: function render() {
      var flexStyle;
      var _props = this.props;
      var _props$tagName = _props.tagName;
      var tagName = _props$tagName === undefined ? "div" : _props$tagName;
      var _props$style = _props.style;
      var style = _props$style === undefined ? {} : _props$style;
      var fluid = _props.fluid;
      var fixed = _props.fixed;
      var width = _props.width;
      var _props$children = _props.children;
      var children = _props$children === undefined ? [] : _props$children;

      var props = _objectWithoutProperties(_props, ["tagName", "style", "fluid", "fixed", "width", "children"]);

      if (fluid) flexStyle = _styleGlobals.flexFluid;
      if (fixed) flexStyle = _styleGlobals.flexFixed;
      return (0, _react.createElement)(tagName, _extends({}, props, { ref: "DIV", style: _extends({}, flexStyle, style, { width: width }) }), children);
    }
  }]);

  return FlexItem;
}(_react.Component), _class.propTypes = {
  fluid: any,
  fixed: any,
  width: any,
  style: any,
  children: any
}, _temp);
exports.default = FlexItem;