"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceUI = reduceUI;
exports.mapHyperState = mapHyperState;

var _hyperline = _interopRequireDefault(require("./lib/core/hyperline"));

var _colors = require("./lib/utils/colors");

var _plugins = _interopRequireDefault(require("./lib/plugins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function reduceUI(state, _ref) {
  var type = _ref.type,
      config = _ref.config;

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

function mapHyperState(_ref2, map) {
  var _ref2$ui = _ref2.ui,
      colors = _ref2$ui.colors,
      fontFamily = _ref2$ui.fontFamily,
      hyperline = _ref2$ui.hyperline;
  var userPlugins = [];

  if (hyperline !== undefined) {
    if (hyperline.plugins !== undefined) {
      userPlugins = hyperline.plugins;
    }
  }

  return Object.assign({}, map, {
    colors: (0, _colors.getColorList)(colors),
    fontFamily: fontFamily,
    userPlugins: userPlugins
  });
}

function pluginsByName(plugins) {
  var dict = {};
  plugins.forEach(function (plugin) {
    dict[plugin.displayName()] = plugin;
  });
  return dict;
}

function filterPluginsByConfig(plugins) {
  var config = window.config.getConfig().hyperline;
  if (!config) return plugins;
  var userPluginNames = config.plugins;

  if (!userPluginNames) {
    return plugins;
  }

  plugins = pluginsByName(plugins);
  var filtered = [];
  userPluginNames.forEach(function (name) {
    if (plugins.hasOwnProperty(name)) {
      filtered.push(plugins[name]);
    }
  });
  return filtered;
} // exports.decorateHyperLine = (HyperLine, { React }) => {
//   return class extends React.Component {
//     static displayName() {
//       return 'HyperLine'
//     }
//     static propTypes() {
//       return {
//         plugins: PropTypes.array.isRequired,
//       }
//     }


function filterPluginsByConfig(plugins) {
  var config = window.config.getConfig().hyperline;
  if (!config) return plugins;
  var userPluginNames = config.plugins;

  if (!userPluginNames) {
    return plugins;
  }

  plugins = pluginsByName(plugins);
  var filtered = [];
  userPluginNames.forEach(function (name) {
    if (plugins.hasOwnProperty(name)) {
      filtered.push(plugins[name]);
    }
  });
  return filtered;
} //     static get defaultProps() {
//       return {
//         plugins: [],
//       }
//     }
//     render() {
//       const plugins = [...this.props.plugins, ...hyperlinePlugins]
//       console.warn(plugins)
//       return React.createElement(HyperLine, Object.assign({}, this.props, { plugins: filterPluginsByConfig(plugins) }))
//     }
//   }
// }


exports.decorateHyper = function (Hyper, _ref3) {
  var React = _ref3.React,
      notify = _ref3.notify;
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props, context) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props, context));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var customChildren = React.createElement(_hyperline.default, _extends({
            style: {
              fontFamily: 'Roboto'
            }
          }, {
            plugins: filterPluginsByConfig(_plugins.default)
          }), React.createElement("div", null, React.createElement("p", null, "Poop")));
          return React.createElement(Hyper, Object.assign({}, this.props, {
            customChildren: customChildren
          }));
        }
      }], [{
        key: "displayName",
        value: function displayName() {
          return 'Hyper';
        }
      }, {
        key: "propTypes",
        value: function propTypes() {
          return {
            colors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
            fontFamily: PropTypes.string,
            customChildren: PropTypes.element.isRequired
          };
        }
      }]);

      return _class;
    }(React.Component)
  );
};