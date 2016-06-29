"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /** Created by ge on 4/28/16.
                     * Takes in a list of breakPoints.
                     * When the window/container width is wider than the largest break-point,
                     * pick the children with "default" key.
                     * */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes;
var any = _React$PropTypes.any;
var node = _React$PropTypes.node;
var string = _React$PropTypes.string;
var number = _React$PropTypes.number;
var bool = _React$PropTypes.bool;
var Responsive = (_temp2 = _class = function (_React$Component) {
  _inherits(Responsive, _React$Component);

  function Responsive() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Responsive)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onResize = function () {
      var width = _this.getWidth();
      _this.getBreakRange(_this.state.orderedBreakPoints, width);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Responsive, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var orderedBreakPoints = this.orderBreakPoints();
      var width = this.getWidth();
      this.getBreakRange(orderedBreakPoints, width);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.onResize);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (this.props.breakPoints !== newProps.breakPoints) this.orderBreakPoints(newProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var _props = this.props;
      var fill = _props.fill;
      var height = _props.height;

      var width;
      if (fill) {
        if (height) width = this.refs.container.clientHeight;else width = this.refs.container.clientWidth;
      } else {
        if (this.props.height) width = window.innerHeight;else width = window.innerWidth;
      }
      this.setState({ width: width });
      return width;
    }
  }, {
    key: "orderBreakPoints",
    value: function orderBreakPoints(newProps) {
      var _ref = newProps || this.props;

      var breakPoints = _ref.breakPoints;

      var orderedBreakPoints = Object.keys(breakPoints).map(function (k) {
        return { breakPoint: breakPoints[k], breakKey: k };
      }).sort(function (a, b) {
        return a.breakKey - b.breakKey;
      });
      this.setState({ orderedBreakPoints: orderedBreakPoints });
      return orderedBreakPoints;
    }
  }, {
    key: "getBreakRange",
    value: function getBreakRange(orderedBreakPoints, width) {
      // breakPoints are sorted to be ascending
      if (orderedBreakPoints.length === 0) {
        return this.setState({ breakKey: "default" });
      }
      for (var i = 0; i < orderedBreakPoints.length; i++) {
        if (width <= orderedBreakPoints[i].breakPoint) {
          this.setState({ breakKey: orderedBreakPoints[i].breakKey });
          return;
        }
      }
      this.setState({ breakKey: "default" });
    }
  }, {
    key: "renderChild",
    value: function renderChild() {
      var children = this.props.children;

      var _ref2 = this.state || {};

      var breakKey = _ref2.breakKey;

      var _children = [].concat(children);
      for (var key in children) {
        if (children[key].props[breakKey]) return children[key];
      }
      return _react2.default.createElement(
        "div",
        null,
        "no child found"
      );
    }
  }, {
    key: "render",
    value: function render() {
      var fill = this.props.fill;

      if (fill) {
        return _react2.default.createElement(
          "div",
          { ref: "container" },
          this.renderChild()
        );
      } else {
        return this.renderChild();
      }
    }
  }]);

  return Responsive;
}(_react2.default.Component), _class.propTypes = {
  breakPoints: any,
  children: node,
  fill: any
}, _temp2);
exports.default = Responsive;