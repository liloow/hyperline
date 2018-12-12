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
        className: "memory-icon"
      }, _react.default.createElement("g", {
        id: "memory",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("path", {
        d: "M3,0 L11,0 L11,14 L3,14 L3,0 Z M4,1 L10,1 L10,13 L4,13 L4,1 Z"
      }), _react.default.createElement("rect", {
        x: "5",
        y: "2",
        width: "4",
        height: "10"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "1",
        width: "2",
        height: "1"
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
        y: "9",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "7",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "12",
        y: "11",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "1",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "3",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "5",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "9",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "7",
        width: "2",
        height: "1"
      }), _react.default.createElement("rect", {
        x: "0",
        y: "11",
        width: "2",
        height: "1"
      })))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .memory-icon {\n            fill: #fff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Memory =
/*#__PURE__*/
function (_Component2) {
  _inherits(Memory, _Component2);

  _createClass(Memory, null, [{
    key: "displayName",
    value: function displayName() {
      return 'memory';
    }
  }]);

  function Memory(props) {
    var _this;

    _classCallCheck(this, Memory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Memory).call(this, props));
    _this.state = {
      activeMemory: 0,
      totalMemory: 0
    };
    _this.getMemory = _this.getMemory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setMemory = _this.setMemory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Memory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setMemory();
      this.interval = setInterval(function () {
        return _this2.setMemory();
      }, 2500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "getMemory",
    value: function getMemory() {
      var _this3 = this;

      return (0, _systeminformation.mem)().then(function (memory) {
        var totalMemory = _this3.getMb(memory.total);

        var activeMemory = _this3.getMb(memory.active);

        var totalWidth = totalMemory.toString().length;
        return {
          activeMemory: (0, _leftPad.default)(activeMemory, totalWidth, 0),
          totalMemory: totalMemory
        };
      });
    }
  }, {
    key: "setMemory",
    value: function setMemory() {
      var _this4 = this;

      return this.getMemory().then(function (data) {
        return _this4.setState(data);
      });
    }
  }, {
    key: "getMb",
    value: function getMb(bytes) {
      // 1024 * 1024 = 1048576
      return (bytes / 1048576).toFixed(0);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement(PluginIcon, null), " ", this.state.activeMemory, "MB / ", this.state.totalMemory, "MB", _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n          }\n        "));
    }
  }]);

  return Memory;
}(_react.Component);

exports.default = Memory;