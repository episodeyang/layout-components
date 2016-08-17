"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMarkdownit = require("react-markdownit");

var _reactMarkdownit2 = _interopRequireDefault(_reactMarkdownit);

var _reactHighlight = require("@episodeyang/react-highlight.js");

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactComponentPropsTable = require("react-component-props-table");

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _FlexColumn = require("../Flex-column.example");

var _FlexColumn2 = _interopRequireDefault(_FlexColumn);

var _FlexRow = require("../Flex-row.example");

var _FlexRow2 = _interopRequireDefault(_FlexRow);

var _FlexFill = require("../Flex-fill.example");

var _FlexFill2 = _interopRequireDefault(_FlexFill);

var _FlexColumn3 = require("!!raw!../Flex-column.example");

var _FlexColumn4 = _interopRequireDefault(_FlexColumn3);

var _FlexRow3 = require("!!raw!../Flex-row.example");

var _FlexRow4 = _interopRequireDefault(_FlexRow3);

var _FlexFill3 = require("!!raw!../Flex-fill.example");

var _FlexFill4 = _interopRequireDefault(_FlexFill3);

var _Flex = require("!!react-docgen!../Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = require("!!react-docgen!../FlexItem");

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ge on 6/24/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Readme = function (_Component) {
  _inherits(Readme, _Component);

  function Readme() {
    _classCallCheck(this, Readme);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Readme.prototype.render = function render() {
    return _react2.default.createElement(
      _reactMarkdownit2.default,
      { stripIndent: true },
      "\n        # React Layout Components\n\n        A collection of layout components that allow you to write responsive views in a functional way.\n\n\n        [![github](https://img.shields.io/github/downloads/episodeyang/layout-components/total.svg?style=flat-square&maxAge=2592000)]()\n\n        ## Usage\n\n        ~~~shell\n        npm install layout-components\n        ~~~\n\n        ## Example Component: `Flex` and `FlexItem`\n\n        Flex and FlexItems are used in conjunction to build a flex box.\n\n        ### Props: `Flex`\n        ",
      _react2.default.createElement(
        "div",
        { className: "table-container horizontal-scroll flex-column center" },
        _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _Flex2.default.props })
      ),
      "### Props: `FlexItem`",
      _react2.default.createElement(
        "div",
        { className: "table-container horizontal-scroll flex-column center" },
        _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _FlexItem2.default.props })
      ),
      "### Usage Example",
      _react2.default.createElement(_FlexRow2.default, null),
      "#### Source Code",
      _react2.default.createElement(
        _reactHighlight2.default,
        null,
        _FlexRow4.default
      ),
      _react2.default.createElement(_FlexColumn2.default, null),
      "#### Source Code",
      _react2.default.createElement(
        _reactHighlight2.default,
        null,
        _FlexColumn4.default
      ),
      _react2.default.createElement(_FlexFill2.default, null),
      "#### Source Code",
      _react2.default.createElement(
        _reactHighlight2.default,
        null,
        _FlexFill4.default
      ),
      "\n        ## Develop\n\n        1. First make your changes, then git commit. Use `serve-docs` to view live update at [http://localhost:5000](http://localhost:5000).\n        2. run `build-docs`, `build-static-docs`, `gh-pages`\n        3. Then remember to push to master.\n\n        "
    );
  };

  return Readme;
}(_react.Component);

exports.default = Readme;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Readme, "Readme", "src/example/Readme.js");
})();

;