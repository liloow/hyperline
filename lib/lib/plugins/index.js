"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hostname = _interopRequireDefault(require("./hostname"));

var _ip = _interopRequireDefault(require("./ip"));

var _memory = _interopRequireDefault(require("./memory"));

var _uptime = _interopRequireDefault(require("./uptime"));

var _cpu = _interopRequireDefault(require("./cpu"));

var _network = _interopRequireDefault(require("./network"));

var _battery = _interopRequireDefault(require("./battery"));

var _time = _interopRequireDefault(require("./time"));

var _docker = _interopRequireDefault(require("./docker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Spotify from './spotify'
var _default = [_hostname.default, _ip.default, _memory.default, _uptime.default, _cpu.default, _network.default,, _battery.default, _time.default, _docker.default
/* Spotify */
];
exports.default = _default;