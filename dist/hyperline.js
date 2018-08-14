(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




class SvgIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static propTypes() {
    return {
      children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element.isRequired
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', className: 'jsx-1813578642' + ' ' + 'icon'
      },
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1813578642',
        css: ['.icon.jsx-1813578642{margin-right:7px;width:16px;height:16px;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = SvgIcon;


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("prop-types");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("left-pad");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("systeminformation");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hyper_decorate__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hyper_decorate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hyper_decorate__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





class HyperLine extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static propTypes() {
    return {
      plugins: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired
    };
  }

  render() {
    const _props = this.props,
          { plugins } = _props,
          props = _objectWithoutProperties(_props, ['plugins']);

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      _extends({}, props, {
        className: 'jsx-1196914242' + ' ' + (props.className != null && props.className || 'line')
      }),
      plugins.map((Component, index) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: index, className: 'jsx-1196914242' + ' ' + 'wrapper'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, null)
      )),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1196914242',
        css: ['.line.jsx-1196914242{display:flex;align-items:center;position:absolute;overflow:hidden;bottom:0;width:100%;height:18px;font:bold 10px Monospace;pointer-events:none;background:rgba(0,0,0,0.08);margin:2px 0;padding:0 10px;}', '.jsx-1196914242,.wrapper.jsx-1196914242{display:flex;flex-shrink:0;align-items:center;padding-left:10px;padding-right:10px;}']
      })
    );
  }
}

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_3_hyper_decorate___default()(HyperLine, 'HyperLine');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hostname__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memory__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cpu__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__battery__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spotify__ = __webpack_require__(19);



// Import Uptime from './uptime'



// Import Time from './time'
// Import Docker from './docker'


/* harmony default export */ exports["a"] = [__WEBPACK_IMPORTED_MODULE_0__hostname__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__ip__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__memory__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__battery__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__cpu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__network__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__spotify__["a" /* default */]];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = getColorList;
/* unused harmony export colorExists */
// Taken from https://github.com/zeit/hyper/blob/master/lib/utils/colors.js
// Effect of this script is the reverse of colors.js in hyper.app
const colorList = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'lightBlack', 'lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightWhite', 'colorCubes', 'grayscale'];

function getColorList(colors) {
  // For forwards compatibility, return early if it's already an object
  if (!Array.isArray(colors)) {
    return colors;
  }

  // For backwards compatibility
  const colorsList = {};
  colors.forEach((color, index) => {
    colorsList[colorList[index]] = color;
  });

  return colorsList;
}

function colorExists(name) {
  return colorList.indexOf(name) !== -1;
}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_left_pad__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_left_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_left_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__battery_battery_icon__ = __webpack_require__(10);

/* eslint no-undef: 0 */
// Note: This is to stop XO from complaining about {navigator}





class Battery extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'battery';
  }

  constructor(props) {
    super(props);

    this.state = {
      charging: false,
      percentage: '--'
    };

    this.batteryEvents = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
    this.handleEvent = this.handleEvent.bind(this);
  }

  setBatteryStatus(battery) {
    this.setState({
      charging: battery.charging,
      percentage: Math.floor(battery.level * 100)
    });
  }

  handleEvent(event) {
    this.setBatteryStatus(event.target);
  }

  componentDidMount() {
    navigator.getBattery().then(battery => {
      this.setBatteryStatus(battery);

      this.batteryEvents.forEach(event => {
        battery.addEventListener(event, this.handleEvent, false);
      });
    });
  }

  componentWillUnmount() {
    navigator.getBattery().then(battery => {
      this.batteryEvents.forEach(event => {
        battery.removeEventListener(event, this.handleEvent);
      });
    });
  }

  render() {
    const { charging, percentage } = this.state;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__battery_battery_icon__["a" /* default */], { charging: charging, percentage: Number(percentage) }),
      ' ',
      __WEBPACK_IMPORTED_MODULE_2_left_pad___default()(percentage, 2, 0),
      '%',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Battery;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__critical__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charging__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draining__ = __webpack_require__(13);






function BatteryIcon({ charging, percentage }) {
  if (charging) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__charging__["a" /* default */], null);
  }

  if (percentage <= 20) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__critical__["a" /* default */], null);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__draining__["a" /* default */], { percentage: percentage });
}

BatteryIcon.propTypes = {
  charging: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  percentage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

/* harmony default export */ exports["a"] = BatteryIcon;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_svg_icon__ = __webpack_require__(2);




class Charging extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fillRule: 'evenodd', className: 'jsx-1339651623'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            className: 'jsx-1339651623' + ' ' + 'cpu-charging-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M9,10 L10,10 L10,9 L6,9 L6,10 L7,10 L7,13 L9,13 L9,10 Z M7,1 L9,1 L9,2 L7,2 L7,1 Z M4,2 L12,2 L12,15 L4,15 L4,2 Z M5,6 L11,6 L11,7 L5,7 L5,6 Z M5,7 L11,7 L11,8 L5,8 L5,7 Z M5,8 L11,8 L11,9 L5,9 L5,8 Z M9,4 L10,4 L10,6 L9,6 L9,4 Z M6,4 L7,4 L7,6 L6,6 L6,4 Z', className: 'jsx-1339651623'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1339651623',
        css: ['.cpu-charging-icon.jsx-1339651623{fill:#fff;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Charging;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_svg_icon__ = __webpack_require__(2);




class Critical extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fillRule: 'evenodd', className: 'jsx-4198323011'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            className: 'jsx-4198323011' + ' ' + 'cpu-critical-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M7,1 L9,1 L9,2 L7,2 L7,1 Z M4,2 L12,2 L12,15 L4,15 L4,2 Z M5,3 L11,3 L11,11 L5,11 L5,3 Z', className: 'jsx-4198323011'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '4198323011',
        css: ['.cpu-critical-icon.jsx-4198323011{fill:#fff;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Critical;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





class Draining extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static propTypes() {
    return {
      percentage: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
    };
  }

  calculateChargePoint(percent) {
    const base = 3.5,
          val = Math.round((100 - percent) / 4.5),
          point = base + val / 2;

    return val > 0 ? `M5,3 L11,3 L11,${point} L5,${point} L5,3 Z` : '';
  }

  render() {
    const chargePoint = this.calculateChargePoint(this.props.percentage);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fillRule: 'evenodd', className: 'jsx-3705512713'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            className: 'jsx-3705512713' + ' ' + 'cpu-discharging-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: `M7,1 L9,1 L9,2 L7,2 L7,1 Z M4,2 L12,2 L12,15 L4,15 L4,2 Z ${chargePoint}`, className: 'jsx-3705512713'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '3705512713',
        css: ['.cpu-discharging-icon.jsx-3705512713{fill:#fff;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Draining;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systeminformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_left_pad__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_left_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_left_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_svg_icon__ = __webpack_require__(2);






class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-1828145249'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            transform: 'translate(1.000000, 1.000000)',
            className: 'jsx-1828145249' + ' ' + 'cpu-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            {
              className: 'jsx-1828145249'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M3,3 L11,3 L11,11 L3,11 L3,3 Z M4,4 L10,4 L10,10 L4,10 L4,4 Z', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '5', y: '5', width: '4', height: '4', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '4', y: '0', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '6', y: '0', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '8', y: '0', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '5', y: '12', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '7', y: '12', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '9', y: '12', width: '1', height: '2', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '3', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '5', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '7', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '9', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '4', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '4', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '6', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '8', width: '2', height: '1', className: 'jsx-1828145249'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '10', width: '2', height: '1', className: 'jsx-1828145249'
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1828145249',
        css: ['.cpu-icon.jsx-1828145249{fill:#fff;}']
      })
    );
  }
}

class Cpu extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'cpu';
  }

  constructor(props) {
    super(props);

    this.state = {
      cpuLoad: 0
    };
  }

  getCpuLoad() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_systeminformation__["currentLoad"])().then(({ currentload }) => this.setState({
      cpuLoad: __WEBPACK_IMPORTED_MODULE_3_left_pad___default()(currentload.toFixed(2), 2, 0)
    }));
  }

  componentDidMount() {
    this.getCpuLoad();
    this.interval = setInterval(() => this.getCpuLoad(), 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      this.state.cpuLoad,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Cpu;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_os__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





class PluginIcon extends __WEBPACK_IMPORTED_MODULE_2_react__["Component"] {
  render() {

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-3711690986'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'g',
          {
            transform: 'translate(1.000000, 1.000000)',
            className: 'jsx-3711690986' + ' ' + 'hostname-icon'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M2,0 L12,0 L12,8 L2,8 L2,0 Z M4,2 L10,2 L10,6 L4,6 L4,2 Z M5.5,11 L8.5,11 L8.5,14 L5.5,14 L5.5,11 Z M11,11 L14,11 L14,14 L11,14 L11,11 Z M0,11 L3,11 L3,14 L0,14 L0,11 Z M6.5,10 L7.5,10 L7.5,11 L6.5,11 L6.5,10 Z M12,10 L13,10 L13,11 L12,11 L12,10 Z M1,10 L2,10 L2,11 L1,11 L1,10 Z M1,9 L13,9 L13,10 L1,10 L1,9 Z M6.5,8 L7.5,8 L7.5,9 L6.5,9 L6.5,8 Z', className: 'jsx-3711690986'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '3711690986',
        css: ['.hostname-icon.jsx-3711690986{fill:#fff;}']
      })
    );
  }
}

class HostName extends __WEBPACK_IMPORTED_MODULE_2_react__["Component"] {
  static displayName() {
    return 'hostname';
  }

  render() {
    const hostname = __WEBPACK_IMPORTED_MODULE_1_os___default.a.hostname();
    const username = process.env.USER;

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(PluginIcon, null),
      ' ',
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'span',
        {
          className: 'jsx-1148757512'
        },
        username,
        '@'
      ),
      hostname,
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = HostName;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_public_ip__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_public_ip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_public_ip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





function getIp() {
  return new Promise(resolve => {
    __WEBPACK_IMPORTED_MODULE_2_public_ip___default.a.v4().then(ip => resolve(ip)).catch(() => resolve('?.?.?.?'));
  });
}

class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-1398854182'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            transform: 'translate(1.000000, 1.000000)',
            className: 'jsx-1398854182' + ' ' + 'ip-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            d: 'M9,9 L8,9 C8.55,9 9,8.55 9,8 L9,7 C9,6.45 8.55,6 8,6 L7,6 C6.45,6 6,6.45 6,7 L6,8 C6,8.55 6.45,9 7,9 L6,9 C5.45,9 5,9.45 5,10 L5,12 L6,12 L6,15 C6,15.55 6.45,16 7,16 L8,16 C8.55,16 9,15.55 9,15 L9,12 L10,12 L10,10 C10,9.45 9.55,9 9,9 L9,9 Z M7,7 L8,7 L8,8 L7,8 L7,7 L7,7 Z M9,11 L8,11 L8,15 L7,15 L7,11 L6,11 L6,10 L9,10 L9,11 L9,11 Z M11.09,7.5 C11.09,5.52 9.48,3.91 7.5,3.91 C5.52,3.91 3.91,5.52 3.91,7.5 C3.91,7.78 3.94,8.05 4,8.31 L4,10.29 C3.39,9.52 3,8.56 3,7.49 C3,5.01 5.02,2.99 7.5,2.99 C9.98,2.99 12,5.01 12,7.49 C12,8.55 11.61,9.52 11,10.29 L11,8.31 C11.06,8.04 11.09,7.78 11.09,7.5 L11.09,7.5 Z M15,7.5 C15,10.38 13.37,12.88 11,14.13 L11,13.08 C12.86,11.92 14.09,9.86 14.09,7.5 C14.09,3.86 11.14,0.91 7.5,0.91 C3.86,0.91 0.91,3.86 0.91,7.5 C0.91,9.86 2.14,11.92 4,13.08 L4,14.13 C1.63,12.88 0,10.38 0,7.5 C0,3.36 3.36,0 7.5,0 C11.64,0 15,3.36 15,7.5 L15,7.5 Z',
            id: 'Shape',
            className: 'jsx-1398854182'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1398854182',
        css: ['.ip-icon.jsx-1398854182{fill:#fff;}']
      })
    );
  }
}

class Ip extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'ip';
  }

  constructor(props) {
    super(props);

    this.state = {
      ip: '?.?.?.?'
    };

    this.setIp = this.setIp.bind(this);
  }

  setIp() {
    getIp().then(ip => this.setState({ ip }));
  }

  componentDidMount() {
    // Every 5 seconds
    this.setIp();
    this.interval = setInterval(() => this.setIp(), 60000 * 5);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      this.state.ip,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Ip;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systeminformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_left_pad__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_left_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_left_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_svg_icon__ = __webpack_require__(2);






class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-2353866624'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            className: 'jsx-2353866624' + ' ' + 'memory-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            { id: 'memory', transform: 'translate(1.000000, 1.000000)', className: 'jsx-2353866624'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M3,0 L11,0 L11,14 L3,14 L3,0 Z M4,1 L10,1 L10,13 L4,13 L4,1 Z', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '5', y: '2', width: '4', height: '10', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '1', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '3', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '5', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '9', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '7', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '12', y: '11', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '1', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '3', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '5', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '9', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '7', width: '2', height: '1', className: 'jsx-2353866624'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { x: '0', y: '11', width: '2', height: '1', className: 'jsx-2353866624'
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '2353866624',
        css: ['.memory-icon.jsx-2353866624{fill:#fff;}']
      })
    );
  }
}

class Memory extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'memory';
  }

  constructor(props) {
    super(props);

    this.state = {
      activeMemory: 0,
      totalMemory: 0
    };

    this.getMemory = this.getMemory.bind(this);
    this.setMemory = this.setMemory.bind(this);
  }

  componentDidMount() {
    this.setMemory();
    this.interval = setInterval(() => this.setMemory(), 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getMemory() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_systeminformation__["mem"])().then(memory => {
      const totalMemory = this.getMb(memory.total);
      const activeMemory = this.getMb(memory.active);
      const totalWidth = totalMemory.toString().length;

      return {
        activeMemory: __WEBPACK_IMPORTED_MODULE_3_left_pad___default()(activeMemory, totalWidth, 0),
        totalMemory
      };
    });
  }

  setMemory() {
    return this.getMemory().then(data => this.setState(data));
  }

  getMb(bytes) {
    // 1024 * 1024 = 1048576
    return (bytes / 1048576).toFixed(0);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      this.state.activeMemory,
      'MB / ',
      this.state.totalMemory,
      'MB',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Memory;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systeminformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systeminformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-1198417585'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd', className: 'jsx-1198417585'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            {
              transform: 'translate(1.000000, 1.000000)',
              className: 'jsx-1198417585' + ' ' + 'network-icon'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'g',
              {
                className: 'jsx-1198417585'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M0,10 L7,10 L7,11 L0,11 L0,10 Z M1,11 L6,11 L6,12 L1,12 L1,11 Z M2,12 L5,12 L5,13 L2,13 L2,12 Z M3,13 L4,13 L4,14 L3,14 L3,13 Z M2,3 L5,3 L5,10 L2,10 L2,3 Z', className: 'jsx-1198417585'
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M8,2 L13,2 L13,3 L8,3 L8,2 Z M9,1 L12,1 L12,2 L9,2 L9,1 Z M10,0 L11,0 L11,1 L10,1 L10,0 Z M7,3 L14,3 L14,4 L7,4 L7,3 Z M9,4 L12,4 L12,11 L9,11 L9,4 Z', className: 'jsx-1198417585'
              })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1198417585',
        css: ['.network-icon.jsx-1198417585{fill:#fff;}']
      })
    );
  }
}

class Network extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'network';
  }

  constructor(props) {
    super(props);
    this.state = {
      download: 0,
      upload: 0
    };
  }

  componentDidMount() {
    this.getSpeed();
    this.interval = setInterval(() => this.getSpeed(), 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculate(data) {
    const rawData = data / 1024;
    return (rawData > 0 ? rawData : 0).toFixed();
  }

  getSpeed() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_systeminformation__["networkStats"])().then(data => this.setState({
      download: this.calculate(data.rx_sec),
      upload: this.calculate(data.tx_sec)
    }));
  }

  render() {
    const { download, upload } = this.state;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      download,
      'kB/s ',
      upload,
      'kB/s',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Network;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-353036458'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd', className: 'jsx-353036458'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            {
              transform: 'translate(1.000000, 1.000000)',
              className: 'jsx-353036458' + ' ' + 'spotify-icon'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'g',
              {
                className: 'jsx-353036458'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
                d: 'm7.49996,1.06347c-3.55479,0 -6.43665,2.88178 -6.43665,6.43657c0,3.55494 2.88186,6.43649 6.43665,6.43649c3.55517,0 6.43672,-2.88155 6.43672,-6.43649c0,-3.55456 -2.88155,-6.43626 -6.4368,-6.43626l0.00008,-0.00031zm2.9518,9.28338c-0.11529,0.18908 -0.36279,0.24903 -0.55187,0.13297c-1.51126,-0.92311 -3.41374,-1.13218 -5.65427,-0.62028c-0.21591,0.04919 -0.43112,-0.08609 -0.48031,-0.30207c-0.04942,-0.21598 0.08532,-0.4312 0.30176,-0.48039c2.45189,-0.5604 4.55507,-0.31898 6.25172,0.71789c0.18908,0.11606 0.24903,0.36279 0.13297,0.55187zm0.78783,-1.75284c-0.14527,0.23635 -0.45425,0.31091 -0.69022,0.16564c-1.73016,-1.06369 -4.36752,-1.37168 -6.41397,-0.75048c-0.2654,0.08017 -0.54572,-0.06941 -0.62627,-0.33435c-0.07994,-0.2654 0.06971,-0.54518 0.33466,-0.62589c2.3376,-0.70928 5.24367,-0.36571 7.23055,0.85524c0.23597,0.14527 0.31052,0.45425 0.16525,0.68991l0,-0.00008zm0.06764,-1.82501c-2.0745,-1.23217 -5.49716,-1.34547 -7.47782,-0.74433c-0.31805,0.09646 -0.6544,-0.08309 -0.75079,-0.40114c-0.09638,-0.31821 0.08301,-0.65433 0.4013,-0.75102c2.27365,-0.69022 6.05334,-0.55686 8.44174,0.86101c0.28669,0.16979 0.38047,0.53926 0.2106,0.82496c-0.1691,0.28608 -0.53957,0.38039 -0.82473,0.21052l-0.00031,0z',
                fill: '#1ED760',
                className: 'jsx-353036458'
              })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '353036458',
        css: ['.spotify-icon.jsx-353036458{fill:#1ED760;}']
      })
    );
  }
}

class Spotify extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'spotify';
  }

  constructor(props) {
    super(props);

    this.state = { version: 'Not running' };
    this.setStatus = this.setStatus.bind(this);

    this.handleSpotifyActivation = this.handleSpotifyActivation.bind(this);
  }

  setStatus() {
    __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default.a.isRunning((err, isRunning) => {
      if (!isRunning) {
        this.setState({ state: 'Not running' });
        return;
      }
      if (err) {
        console.log(`Caught exception at setStatus(e): ${err}`);
      }
      __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default.a.getState((err, st) => {
        if (err) {
          console.log(`Caught exception at spotify.getState(e): ${err}`);
        }

        __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default.a.getTrack((err, track) => {
          if (err) {
            console.log(`Caught exception at spotify.getTrack(e): ${err}`);
          }
          this.setState({
            state: `${st.state === 'playing' ? '▶' : '❚❚'} ${track.artist} - ${track.name}`
          });
        });
      });
    });
  }

  /*
    TODO: Make this work on Linux and Win 32/64
   */
  handleSpotifyActivation(e) {
    e.preventDefault();
    console.log('HANDLE CLICKED FOR SPOTIFY');
    __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default.a.isRunning((err, isRunning) => {
      if (!isRunning) {
        __WEBPACK_IMPORTED_MODULE_2_spotify_node_applescript___default.a.openSpotify();
      }

      if (err) {
        console.log(`Caught exception at handleSpotifyActivation(e): ${err}`);
      }
    });
  }

  componentDidMount() {
    this.setStatus();
    this.interval = setInterval(() => this.setStatus(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        onClick: this.handleSpotifyActivation.bind(this),
        className: 'jsx-4161398108' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      this.state.state,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '4161398108',
        css: ['.wrapper.jsx-4161398108{display:flex;align-items:center;color:#1ED760;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Spotify;


/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("hyper/decorate");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("public-ip");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("spotify-node-applescript");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_core_hyperline__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils_colors__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_plugins__ = __webpack_require__(7);
/* harmony export (immutable) */ exports["reduceUI"] = reduceUI;
/* harmony export (immutable) */ exports["mapHyperState"] = mapHyperState;
/* harmony export (immutable) */ exports["decorateHyperLine"] = decorateHyperLine;
/* harmony export (immutable) */ exports["decorateHyper"] = decorateHyper;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function reduceUI(state, { type, config }) {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      {
        return state.set('hyperline', config.hyperline);
      }
    default:
      break;
  }

  return state;
}

function mapHyperState({ ui: { colors, fontFamily, hyperline } }, map) {
  let userPlugins = [];
  if (hyperline !== undefined) {
    if (hyperline.plugins !== undefined) {
      userPlugins = hyperline.plugins;
    }
  }

  return Object.assign({}, map, {
    colors: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils_colors__["a" /* getColorList */])(colors),
    fontFamily,
    userPlugins
  });
}

function pluginsByName(plugins) {
  const dict = {};
  plugins.forEach(plugin => {
    dict[plugin.displayName()] = plugin;
  });

  return dict;
}

function filterPluginsByConfig(plugins) {
  const config = window.config.getConfig().hyperline;
  if (!config) return plugins;

  const userPluginNames = config.plugins;
  if (!userPluginNames) {
    return plugins;
  }

  plugins = pluginsByName(plugins);
  const filtered = [];

  userPluginNames.forEach(name => {
    if (plugins.hasOwnProperty(name)) {
      filtered.push(plugins[name]);
    }
  });

  return filtered;
}

function decorateHyperLine(HyperLine) {
  return class extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    static displayName() {
      return 'HyperLine';
    }

    static propTypes() {
      return {
        plugins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
      };
    }

    static get defaultProps() {
      return {
        plugins: []
      };
    }

    render() {
      const plugins = [...this.props.plugins, ...__WEBPACK_IMPORTED_MODULE_4__lib_plugins__["a" /* default */]];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HyperLine, _extends({}, this.props, { plugins: filterPluginsByConfig(plugins) }));
    }
  };
}

function decorateHyper(Hyper) {
  return class extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    static displayName() {
      return 'Hyper';
    }

    static propTypes() {
      return {
        colors: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
        fontFamily: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        customChildren: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
      };
    }

    render() {
      const customChildren = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.props.customChildren,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__lib_core_hyperline__["a" /* default */], { style: { fontFamily: this.props.fontFamily } })
      );

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hyper, _extends({}, this.props, { customChildren: customChildren }));
    }
  };
}

/***/ }
/******/ ])));