"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _svgIcon = _interopRequireDefault(require("../utils/svg-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PluginIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(PluginIcon, _Component);

  function PluginIcon() {
    _classCallCheck(this, PluginIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(PluginIcon).apply(this, arguments));
  }

  _createClass(PluginIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_svgIcon.default, null, _react.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("g", {
        className: "time-icon",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M0,0 L14,0 L14,14 L0,14 L0,0 Z M1,1 L13,1 L13,13 L1,13 L1,1 Z"
      }), _react.default.createElement("path", {
        d: "M6,2 L7,2 L7,7 L6,7 L6,2 Z M6,7 L10,7 L10,8 L6,8 L6,7 Z"
      })))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .time-icon {\n            fill: #fff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Time =
/*#__PURE__*/
function (_Component2) {
  _inherits(Time, _Component2);

  _createClass(Time, null, [{
    key: "displayName",
    value: function displayName() {
      return 'time';
    }
  }]);

  function Time(props) {
    var _this;

    _classCallCheck(this, Time);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Time).call(this, props));
    _this.state = {
      time: _this.getCurrentTime()
    };
    return _this;
  }

  _createClass(Time, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.setState({
          time: _this2.getCurrentTime()
        });
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      // TODO: Allow for format overriding by the user
      return (0, _moment.default)().format('LTS');
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement(PluginIcon, null), " ", this.state.time, _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n          }\n        "));
    }
  }]);

  return Time;
}(_react.Component);

exports.default = Time;