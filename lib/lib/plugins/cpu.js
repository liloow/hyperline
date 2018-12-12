"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _systeminformation = require("systeminformation");

var _leftPad = _interopRequireDefault(require("left-pad"));

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
        className: "cpu-icon",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M3,3 L11,3 L11,11 L3,11 L3,3 Z M4,4 L10,4 L10,10 L4,10 L4,4 Z"
      }), _react.default.createElement("rect", {
        x: "5",
        y: "5",
        width: "4",
        height: "4"
      }), _react.default.createElement("rect", {
        x: "4",
        y: "0",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "6",
        y: "0",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "8",
        y: "0",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "5",
        y: "12",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "7",
        y: "12",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "9",
        y: "12",
        width: "1",
        height: "2"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "3",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "5",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "7",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "9",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "4",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "4",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "6",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "8",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "10",
        width: "2",
        height: "1"
      })))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .cpu-icon {\n            fill: #fff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Cpu =
/*#__PURE__*/
function (_Component2) {
  _inherits(Cpu, _Component2);

  _createClass(Cpu, null, [{
    key: "displayName",
    value: function displayName() {
      return 'cpu';
    }
  }]);

  function Cpu(props) {
    var _this;

    _classCallCheck(this, Cpu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cpu).call(this, props));
    _this.state = {
      cpuLoad: 0
    };
    return _this;
  }

  _createClass(Cpu, [{
    key: "getCpuLoad",
    value: function getCpuLoad() {
      var _this2 = this;

      (0, _systeminformation.currentLoad)().then(function (_ref) {
        var currentload = _ref.currentload;
        return _this2.setState({
          cpuLoad: (0, _leftPad.default)(currentload.toFixed(2), 2, 0)
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.getCpuLoad();
      this.interval = setInterval(function () {
        return _this3.getCpuLoad();
      }, 2500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement(PluginIcon, null), " ", this.state.cpuLoad, _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n          }\n        "));
    }
  }]);

  return Cpu;
}(_react.Component);

exports.default = Cpu;