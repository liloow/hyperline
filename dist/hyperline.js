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
/* harmony export (immutable) */ exports["a"] = getColorList;
/* unused harmony export colorExists */
// Taken from https://github.com/zeit/hyper/blob/master/lib/utils/colors.js
// Effect of this script is the reverse of colors.js in hyper.app
const colorList = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'lightBlack', 'lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightWhite', 'colorCubes', 'grayscale'];
/* harmony export (immutable) */ exports["b"] = colorList;


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
/* 7 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_colors__ = __webpack_require__(6);
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
        className: 'jsx-241609275' + ' ' + (props.className != null && props.className || 'line')
      }),
      plugins.map((Component, index) => {
        // +1 to skip black
        let color = __WEBPACK_IMPORTED_MODULE_4__utils_colors__["b" /* colorList */][index + 1] || Math.ceil(Math.random() * 7);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { key: index, style: { color: color, stroke: color }, className: 'jsx-241609275' + ' ' + 'wrapper'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, null)
        );
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '241609275',
        css: ['.line.jsx-241609275{display:flex;justify-content:space-between;position:absolute;overflow:hidden;bottom:0;width:100%;height:18px;font:bold 10px Monospace;pointer-events:none;background:rgba(0,0,0,0.08);margin:2px 0;padding:1px 10px 0;}', '.jsx-241609275,.wrapper.jsx-241609275{display:flex;flex-shrink:0;align-items:center;padding-left:10px;padding-right:10px;}']
      })
    );
  }
}

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_3_hyper_decorate___default()(HyperLine, 'HyperLine');

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hostname__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memory__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cpu__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__battery__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__time__ = __webpack_require__(19);



// Import Uptime from './uptime'




// Import Docker from './docker'
// import spotify from './spotify'

/* harmony default export */ exports["a"] = [__WEBPACK_IMPORTED_MODULE_0__hostname__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__ip__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__battery__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__memory__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__cpu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__time__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__network__["a" /* default */]];

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
      percentage: '--',
      low: false
    };

    this.batteryEvents = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];
    this.handleEvent = this.handleEvent.bind(this);
  }

  setBatteryStatus(battery) {
    this.setState({
      charging: battery.charging,
      percentage: Math.floor(battery.level * 100),
      low: this.flashLowBattery()
    });
  }

  flashLowBattery() {
    if (this.state.percentage > 20 && this.state.low || this.state.charging) {
      clearInterval(this.state.low);
      return false;
    }
    if (!this.state.low && this.state.percentage <= 20) {
      const interval = setInterval(() => document.querySelector('#bat').classList.toggle('blinky'), 1000);
      return interval;
    }
    return this.state.low;
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
    const { charging, percentage, low } = this.state;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { id: 'bat', className: 'jsx-2574701433' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__battery_battery_icon__["a" /* default */], { charging: charging, percentage: Number(percentage) }),
      ' ',
      __WEBPACK_IMPORTED_MODULE_2_left_pad___default()(percentage, 2, 0),
      '%',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '2574701433',
        css: ['.wrapper.jsx-2574701433{display:flex;align-items:center;opacity:1;transition:all 2s ease;}', '.wrapper.blinky.jsx-2574701433{opacity:0;}']
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_os__ = __webpack_require__(22);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_public_ip__ = __webpack_require__(23);
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
      totalMemory: 0,
      unit: null
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
      const totalMemory = Math.round(this.getVal(memory.total));
      const activeMemory = this.getVal(memory.active);
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

  getVal(bytes, unit = 'G') {
    if (this.state.unit !== unit) this.setState({ unit });
    // 1024 * 1024 = 1048576
    if (unit === 'M') return (bytes / 1048576).toFixed(0);
    // 1024 * 1024 = 1073741824
    if (unit === 'G') return (bytes / 1073741824).toFixed(2);
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
      `${this.state.unit}B`,
      ' / ',
      this.state.totalMemory,
      ' ',
      `${this.state.unit}B`,
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
      download < 1024 ? `${download}k` : `${(download / 1024).toFixed(2)}M`,
      'B/s ',
      upload < 1024 ? `${upload}k` : `${(download / 1024).toFixed(2)}M`,
      'B/s',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__ = __webpack_require__(2);





class PluginIcon extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__utils_svg_icon__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', className: 'jsx-3937828495'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'g',
          {
            transform: 'translate(1.000000, 1.000000)',
            className: 'jsx-3937828495' + ' ' + 'time-icon'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            {
              className: 'jsx-3937828495'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M0,0 L14,0 L14,14 L0,14 L0,0 Z M1,1 L13,1 L13,13 L1,13 L1,1 Z', className: 'jsx-3937828495'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M6,2 L7,2 L7,7 L6,7 L6,2 Z M6,7 L10,7 L10,8 L6,8 L6,7 Z', className: 'jsx-3937828495'
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '3937828495',
        css: ['.time-icon.jsx-3937828495{fill:#fff;}']
      })
    );
  }
}

class Time extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  static displayName() {
    return 'time';
  }

  constructor(props) {
    super(props);

    this.state = {
      time: this.getCurrentTime()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentTime() {
    // TODO: Allow for format overriding by the user
    return __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('LTS');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1148757512' + ' ' + 'wrapper'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PluginIcon, null),
      ' ',
      this.state.time,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1148757512',
        css: ['.wrapper.jsx-1148757512{display:flex;align-items:center;}']
      })
    );
  }
}
/* harmony export (immutable) */ exports["a"] = Time;


/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("hyper/decorate");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("public-ip");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_core_hyperline__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils_colors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_plugins__ = __webpack_require__(8);
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