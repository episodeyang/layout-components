"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /** Created by ge on 4/27/16. */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FlexItem = require("./FlexItem");

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var any = _react.PropTypes.any;
var node = _react.PropTypes.node;
var FlexHide = (_temp2 = _class = function (_Component) {
  _inherits(FlexHide, _Component);

  function FlexHide() {
    var _temp, _this, _ret;

    _classCallCheck(this, FlexHide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onTransitionEnd = function (e) {
      _this.setState({ show: !_this.props.hide, entering: false, leaving: false });
      if (typeof _this.props.onTransitionEnd === "function") _this.props.onTransitionEnd(e);
      _this.getContainerWidth();
      window.dispatchEvent(new CustomEvent("reflow", { target: _this.nativeElement }));
    }, _this.getContainerWidth = function () {
      _this.setState({ flexContainerWidth: _reactDom2.default.findDOMNode(_this.refs["FlexItem"]).clientWidth });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FlexHide.prototype.componentWillMount = function componentWillMount() {
    var hide = this.props.hide;

    this.setState({ show: !hide, entering: !hide, leaving: hide, init: true });
  };

  FlexHide.prototype.componentDidMount = function componentDidMount() {
    this.innerContainer = _reactDom2.default.findDOMNode(this.refs["DIV"]);
    window.addEventListener("resize", this.getContainerWidth);
    this.getContainerWidth();
  };

  FlexHide.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var hide = newProps.hide;
    var width = newProps.width;
    var children = newProps.children;

    if (this.props.hide && !hide) this.setState({ show: true, entering: true, leaving: false, init: true });
    if (!this.props.hide && hide) this.setState({ leaving: true, entering: false, init: true });
  };

  FlexHide.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.getContainerWidth);
  };

  FlexHide.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props;
    var hide = _props2.hide;
    var width = _props2.width;
    var style = _props2.style;
    var _props2$transition = _props2.transition;
    var transition = _props2$transition === undefined ? "width 0.3s ease-out" : _props2$transition;
    var children = _props2.children;
    var onTransitionEnd = _props2.onTransitionEnd;

    var props = _objectWithoutProperties(_props2, ["hide", "width", "style", "transition", "children", "onTransitionEnd"]);

    var _style = _extends({}, style, { position: "relative", transition: transition });
    var _innerTransition = "opacity 0.3s ease-out";

    var _props = _extends({}, props, { onTransitionEnd: this.onTransitionEnd });
    var _state = this.state;
    var show = _state.show;
    var entering = _state.entering;
    var leaving = _state.leaving;
    var init = _state.init;
    var flexContainerWidth = _state.flexContainerWidth;

    if (show && typeof flexContainerWidth === 'undefined') {
      // initial rendering shown
      var innerStyle = {
        position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
        transition: _innerTransition
      };
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          width: width,
          style: style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV", style: innerStyle },
          children
        )
      );
    } else if (!show && typeof flexContainerWidth === 'undefined') {
      // initial rendering hidden
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          fixed: true, width: "0px",
          ref: "FlexItem" }),
        _react2.default.createElement("div", { ref: "DIV", style: { transition: _innerTransition } })
      );
    } else if (!show) {
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          fixed: true, width: "0px",
          ref: "FlexItem" }),
        _react2.default.createElement("div", { ref: "DIV" })
      );
    } else if (show && leaving && init) {
      var _innerStyle = {
        transition: _innerTransition,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: flexContainerWidth + "px"
      };
      setTimeout(function () {
        _this2.setState({ init: false });
      }, 0);
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          fixed: true,
          width: flexContainerWidth + "px",
          style: style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV",
            style: _innerStyle },
          children
        )
      );
    } else if (show && leaving) {
      var _innerStyle2 = {
        transition: _innerTransition,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: flexContainerWidth + "px"
      };
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          fixed: true,
          width: "0px",
          style: _style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV",
            style: _extends({}, _innerStyle2, { opacity: 0 }) },
          children
        )
      );
    } else if (show && entering && init) {
      var _innerStyle3 = {
        position: "absolute", top: 0, bottom: 0, right: 0,
        width: "100%",
        minWidth: width,
        opacity: 0
      };
      setTimeout(function () {
        _this2.setState({ init: false });
      }, 0);
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          width: width,
          style: _style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV",
            style: _innerStyle3 },
          children
        )
      );
    } else if (show && entering) {
      var _innerStyle4 = {
        position: "absolute", top: 0, bottom: 0, right: 0,
        transition: _innerTransition,
        width: "100%",
        minWidth: width,
        opacity: 1
      };
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          width: width,
          style: _style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV",
            style: _innerStyle4 },
          children
        )
      );
    } else if (show) {
      var _innerStyle5 = {
        position: "absolute", top: 0, bottom: 0, right: 0,
        opacity: 1,
        transition: _innerTransition,
        width: flexContainerWidth + "px"
      };
      return _react2.default.createElement(
        _FlexItem2.default,
        _extends({ key: "flex-hide-item" }, _props, {
          ref: "FlexItem",
          width: width,
          style: _style }),
        _react2.default.createElement(
          "div",
          { ref: "DIV", style: _innerStyle5 },
          children
        )
      );
    }
  };

  return FlexHide;
}(_react.Component), _class.propTypes = {
  // fixed: any.isRequired,
  hide: bool,
  width: any.isRequired,
  transition: string,
  children: node,
  onTransitionEnd: func
}, _temp2);
exports.default = FlexHide;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(string, "string", "src/FlexHide.js");

  __REACT_HOT_LOADER__.register(bool, "bool", "src/FlexHide.js");

  __REACT_HOT_LOADER__.register(func, "func", "src/FlexHide.js");

  __REACT_HOT_LOADER__.register(any, "any", "src/FlexHide.js");

  __REACT_HOT_LOADER__.register(node, "node", "src/FlexHide.js");

  __REACT_HOT_LOADER__.register(FlexHide, "FlexHide", "src/FlexHide.js");
})();

;