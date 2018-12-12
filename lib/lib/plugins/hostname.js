"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _os = _interopRequireDefault(require("os"));

var _react = _interopRequireWildcard(require("react"));

var _svgIcon = _interopRequireDefault(require("../utils/svg-icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        className: "hostname-icon",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("path", {
        d: "M2,0 L12,0 L12,8 L2,8 L2,0 Z M4,2 L10,2 L10,6 L4,6 L4,2 Z M5.5,11 L8.5,11 L8.5,14 L5.5,14 L5.5,11 Z M11,11 L14,11 L14,14 L11,14 L11,11 Z M0,11 L3,11 L3,14 L0,14 L0,11 Z M6.5,10 L7.5,10 L7.5,11 L6.5,11 L6.5,10 Z M12,10 L13,10 L13,11 L12,11 L12,10 Z M1,10 L2,10 L2,11 L1,11 L1,10 Z M1,9 L13,9 L13,10 L1,10 L1,9 Z M6.5,8 L7.5,8 L7.5,9 L6.5,9 L6.5,8 Z"
      }))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .hostname-icon {\n            fill: #fff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var HostName =
/*#__PURE__*/
function (_Component2) {
  _inherits(HostName, _Component2);

  function HostName() {
    _classCallCheck(this, HostName);

    return _possibleConstructorReturn(this, _getPrototypeOf(HostName).apply(this, arguments));
  }

  _createClass(HostName, [{
    key: "render",
    value: function render() {
      var hostname = _os.default.hostname();

      var username = process.env.USER;
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement(PluginIcon, null), " ", _react.default.createElement("span", null, username, "@"), hostname, _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n          }\n        "));
    }
  }], [{
    key: "displayName",
    value: function displayName() {
      return 'hostname';
    }
  }]);

  return HostName;
}(_react.Component);

exports.default = HostName;