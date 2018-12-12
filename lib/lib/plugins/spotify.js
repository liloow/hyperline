"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _spotifyWebApiNode = _interopRequireDefault(require("spotify-web-api-node"));

var _svgIcon = _interopRequireDefault(require("../utils/svg-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var spotify = new _spotifyWebApiNode.default();

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
        className: "spotify-icon",
        transform: "translate(1.000000, 1.000000)"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "m7.49996,1.06347c-3.55479,0 -6.43665,2.88178 -6.43665,6.43657c0,3.55494 2.88186,6.43649 6.43665,6.43649c3.55517,0 6.43672,-2.88155 6.43672,-6.43649c0,-3.55456 -2.88155,-6.43626 -6.4368,-6.43626l0.00008,-0.00031zm2.9518,9.28338c-0.11529,0.18908 -0.36279,0.24903 -0.55187,0.13297c-1.51126,-0.92311 -3.41374,-1.13218 -5.65427,-0.62028c-0.21591,0.04919 -0.43112,-0.08609 -0.48031,-0.30207c-0.04942,-0.21598 0.08532,-0.4312 0.30176,-0.48039c2.45189,-0.5604 4.55507,-0.31898 6.25172,0.71789c0.18908,0.11606 0.24903,0.36279 0.13297,0.55187zm0.78783,-1.75284c-0.14527,0.23635 -0.45425,0.31091 -0.69022,0.16564c-1.73016,-1.06369 -4.36752,-1.37168 -6.41397,-0.75048c-0.2654,0.08017 -0.54572,-0.06941 -0.62627,-0.33435c-0.07994,-0.2654 0.06971,-0.54518 0.33466,-0.62589c2.3376,-0.70928 5.24367,-0.36571 7.23055,0.85524c0.23597,0.14527 0.31052,0.45425 0.16525,0.68991l0,-0.00008zm0.06764,-1.82501c-2.0745,-1.23217 -5.49716,-1.34547 -7.47782,-0.74433c-0.31805,0.09646 -0.6544,-0.08309 -0.75079,-0.40114c-0.09638,-0.31821 0.08301,-0.65433 0.4013,-0.75102c2.27365,-0.69022 6.05334,-0.55686 8.44174,0.86101c0.28669,0.16979 0.38047,0.53926 0.2106,0.82496c-0.1691,0.28608 -0.53957,0.38039 -0.82473,0.21052l-0.00031,0z",
        fill: "#1ED760"
      }))))), _react.default.createElement("style", {
        jsx: true
      }, "\n          .spotify-icon {\n            fill: #1ED760;\n          }\n        "));
    }
  }]);

  return PluginIcon;
}(_react.Component);

var Spotify =
/*#__PURE__*/
function (_Component2) {
  _inherits(Spotify, _Component2);

  _createClass(Spotify, null, [{
    key: "displayName",
    value: function displayName() {
      return 'spotify';
    }
  }]);

  function Spotify(props) {
    var _this;

    _classCallCheck(this, Spotify);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spotify).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setStatus",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var current;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return spotify.getMyCurrentPlayingTrack();

            case 3:
              current = _context.sent;

              _this.setState({
                current: current
              });

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(e.button == 0)) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return spotify.skipToNext();

              case 4:
                _context2.next = 20;
                break;

              case 6:
                if (!(e.button == 1)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 9;
                return spotify.skipToNext();

              case 9:
                _context2.next = 20;
                break;

              case 11:
                if (!(e.type === 'dblClick')) {
                  _context2.next = 20;
                  break;
                }

                if (!(_this.state.current === 'Not playing')) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 15;
                return spotify.play();

              case 15:
                _context2.next = 19;
                break;

              case 17:
                _context2.next = 19;
                return spotify.pause();

              case 19:
                return _context2.abrupt("return", _this.refreshTimer());

              case 20:
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 22]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refreshTimer", function () {
      clearInterval(_this.interval);
      _this.interval = setInterval(function () {
        _this.setStatus();
      }, _this.state.current === 'Not Playing' ? 30000 : 2500);
    });

    _this.state = {
      current: 'Not playing'
    };
    return _this;
  }

  _createClass(Spotify, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setStatus();
      this.interval = setInterval(function () {
        _this2.setStatus();
      }, this.state.current === 'Not Playing' ? 30000 : 2500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        className: "wrapper",
        onClick: function onClick() {
          return _this3.handleClick;
        }
      }, _react.default.createElement(PluginIcon, null), " ", this.state.current, _react.default.createElement("style", {
        jsx: true
      }, "\n          .wrapper {\n            display: flex;\n            align-items: center;\n            color: #1ED760;\n          }\n        "));
    }
  }]);

  return Spotify;
}(_react.Component);

exports.default = Spotify;