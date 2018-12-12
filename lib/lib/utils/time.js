"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatUptime;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatUptime(uptime) {
  var uptimeInHours = Number((uptime / 3600).toFixed(0));

  if (uptimeInHours === 0) {
    return '0h';
  }

  var uptimeInMoment = _moment.default.duration(uptimeInHours, 'hours');

  var days = uptimeInMoment.days();
  var hours = uptimeInMoment.hours();
  var daysFormatted = days ? days + 'd' : '';
  var hoursFormatted = hours ? hours + 'h' : '';
  return [daysFormatted, hoursFormatted].filter(Boolean).join(' ');
}