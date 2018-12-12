// import PropTypes from 'prop-types'
import HyperLine from './lib/core/hyperline'
import { getColorList } from './lib/utils/colors'
import hyperlinePlugins from './lib/plugins'

export function reduceUI(state, { type, config }) {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('hyperline', config.hyperline)
    }
    default:
      break
  }
  return state
}

export function mapHyperState({ ui: { colors, fontFamily, hyperline } }, map) {
  let userPlugins = []
  if (hyperline !== undefined) {
    if (hyperline.plugins !== undefined) {
      userPlugins = hyperline.plugins
    }
  }

  return Object.assign({}, map, {
    colors: getColorList(colors),
    fontFamily,
    userPlugins,
  })
}

function pluginsByName(plugins) {
  const dict = {}
  plugins.forEach(plugin => {
    dict[plugin.displayName()] = plugin
  })

  return dict
}

function filterPluginsByConfig(plugins) {
  const config = window.config.getConfig().hyperline
  if (!config) return plugins

  const userPluginNames = config.plugins
  if (!userPluginNames) {
    return plugins
  }

  plugins = pluginsByName(plugins)
  const filtered = []

  userPluginNames.forEach(name => {
    if (plugins.hasOwnProperty(name)) {
      filtered.push(plugins[name])
    }
  })

  return filtered
}

function filterPluginsByConfig(plugins) {
  const config = window.config.getConfig().hyperline
  if (!config) return plugins

  const userPluginNames = config.plugins
  if (!userPluginNames) {
    return plugins
  }

  plugins = pluginsByName(plugins)
  const filtered = []

  userPluginNames.forEach(name => {
    if (plugins.hasOwnProperty(name)) {
      filtered.push(plugins[name])
    }
  })

  return filtered
}

exports.decorateHyper = (Hyper, { React, notify }) => {
  return class extends React.Component {
    constructor(props, context) {
      super(props, context)
    }

    static displayName() {
      return 'Hyper'
    }

    static propTypes() {
      return {
        colors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        fontFamily: PropTypes.string,
        customChildren: PropTypes.element.isRequired,
      }
    }
    render() {
      const customChildren = (
        <HyperLine style={{ fontFamily: 'Roboto' }} {...{ plugins: filterPluginsByConfig(hyperlinePlugins) }}>
          <div>
            <p>Poop</p>
          </div>
        </HyperLine>
      )
      return React.createElement(Hyper, Object.assign({}, this.props, { customChildren }))
    }
  }
}
