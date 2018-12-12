"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _critical = _interopRequireDefault(require("./critical"));

var _charging = _interopRequireDefault(require("./charging"));

var _draining = _interopRequireDefault(require("./draining"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BatteryIcon(_ref) {
  var charging = _ref.charging,
      percentage = _ref.percentage;

  if (charging) {
    return _react.default.createElement(_charging.default, null);
  }

  if (percentage <= 20) {
    return _react.default.createElement(_critical.default, null);
  }

  return _react.default.createElement(_draining.default, {
    percentage: percentage
  });
}

BatteryIcon.propTypes = {
  charging: _propTypes.default.bool,
  percentage: _propTypes.default.number
};
var _default = BatteryIcon;
exports.default = _default;