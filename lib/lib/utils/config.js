"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultConfig = getDefaultConfig;
exports.mergeConfigs = mergeConfigs;

var _plugins = _interopRequireDefault(require("../plugins"));

var _colors = require("./colors");

var _notify = _interopRequireDefault(require("hyper/notify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getPluginFromListByName(pluginList, name) {
  return pluginList.find(function (each) {
    return each.name === name;
  });
}

function mergeColorConfigs(defaultColor) {
  var userColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!userColor || !(0, _colors.colorExists)(userColor)) {
    return defaultColor;
  }

  return userColor;
}

function mergePluginConfigs(defaultPlugins, userPlugins) {
  if (!userPlugins) {
    return defaultPlugins;
  }

  return userPlugins.reduce(function (newPlugins, plugin) {
    var newPlugin = Object.assign({}, plugin);
    var name = plugin.name,
        _plugin$options = plugin.options,
        options = _plugin$options === void 0 ? false : _plugin$options;

    if (_typeof(plugin) !== 'object' || Array.isArray(plugin)) {
      (0, _notify.default)('HyperLine', "'plugins' array members in '.hyper.js' must be objects.");
      return newPlugins;
    }

    var _getPluginFromListByN = getPluginFromListByName(defaultPlugins, name),
        _getPluginFromListByN2 = _getPluginFromListByN.options,
        defaultOptions = _getPluginFromListByN2 === void 0 ? false : _getPluginFromListByN2;

    if (!defaultOptions) {
      (0, _notify.default)('HyperLine', "Plugin with name \"".concat(name, "\" does not exist."));
      return newPlugins;
    }

    if (options) {
      newPlugin.options = defaultOptions;
    }

    var _plugins$name$validat = _plugins.default[name].validateOptions,
        validator = _plugins$name$validat === void 0 ? false : _plugins$name$validat;

    if (validator) {
      var errors = validator(options);

      if (errors.length > 0) {
        errors.forEach(function (error) {
          return (0, _notify.default)("HyperLine '".concat(name, "' plugin"), error);
        });
        newPlugin.options = defaultOptions;
      }
    }

    return _toConsumableArray(newPlugins).concat([plugin]);
  }, []);
}

function getDefaultConfig(plugins) {
  return {
    color: 'black',
    plugins: Object.keys(plugins).reduce(function (pluginsArray, pluginName) {
      var defaultOptions = plugins[pluginName].defaultOptions;
      var plugin = {
        name: pluginName,
        options: defaultOptions
      };
      return _toConsumableArray(pluginsArray).concat([plugin]);
    }, [])
  };
}

function mergeConfigs(defaultConfig) {
  var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!userConfig) {
    return defaultConfig;
  }

  return {
    color: mergeColorConfigs(defaultConfig.color, userConfig.color),
    plugins: mergePluginConfigs(defaultConfig.plugins, userConfig.plugins)
  };
}