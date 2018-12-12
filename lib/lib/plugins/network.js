"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _systeminformation = require("systeminformation");

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
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("g", {
        className: "network-icon",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M0,10 L7,10 L7,11 L0,11 L0,10 Z M1,11 L6,11 L6,12 L1,12 L1,11 Z M2,12 L5,12 L5,13 L2,13 L2,12 Z M3,13 L4,13 L4,14 L3,14 L3,13 Z M2,3 L5,3 L5,10 L2,10 L2,3 Z"
      }), _react.default.createElement("path", {
        d: "M8,2 L13,2 L13,3 L8,3 L8,2 Z M9,1 L12,1 L12,2 L9,2 L9,1 Z M10,0 L11,0 L11,1 L10,1 L10,0 Z M7,3 L14,3 L14,4 L7,4 L7,3 Z M9,4 L12,4 L12,11 L9,11 L9,4 Z"
      }))))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .network-icon {\n            fill: #fff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Network =
/*#__PURE__*/
function (_Component2) {
  _inherits(Network, _Component2);

  _createClass(Network, null, [{
    key: "displayName",
    value: function displayName() {
      return 'network';
    }
  }]);

  function Network(props) {
    var _this;

    _classCallCheck(this, Network);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Network).call(this, props));
    _this.state = {
      download: 0,
      upload: 0
    };
    return _this;
  }

  _createClass(Network, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getSpeed();
      this.interval = setInterval(function () {
        return _this2.getSpeed();
      }, 1500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "calculate",
    value: function calculate(data) {
      var rawData = data / 1024;
      return (rawData > 0 ? rawData : 0).toFixed();
    }
  }, {
    key: "getSpeed",
    value: function getSpeed() {
      var _this3 = this;

      (0, _systeminformation.networkStats)().then(function (data) {
        return _this3.setState({
          download: _this3.calculate(data.rx_sec),
          upload: _this3.calculate(data.tx_sec)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          download = _this$state.download,
          upload = _this$state.upload;
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement(PluginIcon, null), " ", download, "kB/s ", upload, "kB/s", _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n          }\n        "));
    }
  }]);

  return Network;
}(_react.Component);

exports.default = Network;