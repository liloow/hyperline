"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = require("child_process");

var _react = _interopRequireWildcard(require("react"));

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
        d: "m3.14817,9.43129c-0.41374,0 -0.78987,-0.33852 -0.78987,-0.75226s0.33852,-0.75226 0.78987,-0.75226s0.78987,0.33852 0.78987,0.75226s-0.37613,0.75226 -0.78987,0.75226zm9.70417,-4.09982c-0.07523,-0.60181 -0.45136,-1.09078 -0.94033,-1.46691l-0.18807,-0.15045l-0.15045,0.18807c-0.3009,0.33852 -0.41374,0.94033 -0.37613,1.39168c0.03761,0.33852 0.15045,0.67703 0.33852,0.94033c-0.15045,0.07523 -0.33852,0.15045 -0.48897,0.22568c-0.33852,0.11284 -0.67703,0.15045 -1.01555,0.15045l-9.74178,0l-0.03761,0.22568c-0.07523,0.71465 0.03761,1.46691 0.33852,2.14394l0.15045,0.26329l0,0.03761c0.90271,1.50452 2.52007,2.18156 4.28789,2.18156c3.38517,0 6.16854,-1.46691 7.485,-4.62641c0.8651,0.03761 1.7302,-0.18807 2.14394,-1.01555l0.11284,-0.18807l-0.18807,-0.11284c-0.48897,-0.3009 -1.166,-0.33852 -1.7302,-0.18807zm-4.85208,-0.60181l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm0,-1.84304l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm0,-1.88065l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm1.80543,3.72369l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm-5.45389,0l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm1.84304,0l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm-3.64847,0l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm3.64847,-1.84304l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691zm-1.84304,0l-1.46691,0l0,1.46691l1.46691,0l0,-1.46691z"
      }))))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .network-icon {\n            fill: #73abff;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Docker =
/*#__PURE__*/
function (_Component2) {
  _inherits(Docker, _Component2);

  _createClass(Docker, null, [{
    key: "displayName",
    value: function displayName() {
      return 'docker';
    }
  }]);

  function Docker(props) {
    var _this;

    _classCallCheck(this, Docker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Docker).call(this, props));
    _this.state = {
      version: 'Not running'
    };
    _this.setVersion = _this.setVersion.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Docker, [{
    key: "setVersion",
    value: function setVersion() {
      var _this2 = this;

      exec('/usr/local/bin/docker version -f {{.Server.Version}}').then(function (version) {
        _this2.setState({
          version: version
        });
      }).catch(function () {
        _this2.setState({
          version: 'Not running'
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setVersion();
      this.interval = setInterval(function () {
        return _this3.setVersion();
      }, 15000);
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
      }, _react.default.createElement(PluginIcon, null), " ", this.state.version, _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n            color: #73abff;\n          }\n        "));
    }
  }]);

  return Docker;
}(_react.Component);

exports.default = Docker;

function exec(command, options) {
  return new Promise(function (resolve, reject) {
    (0, _child_process.exec)(command, options, function (err, stdout, stderr) {
      if (err) {
        reject("".concat(err, "\n").concat(stderr));
      } else {
        resolve(stdout);
      }
    });
  });
}