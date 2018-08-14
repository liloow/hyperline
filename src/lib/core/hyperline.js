import React, { Component } from 'react';
import PropTypes from 'prop-types';
import decorate from 'hyper/decorate';
import { colorList } from '../utils/colors';

class HyperLine extends Component {
  static propTypes() {
    return {
      plugins: PropTypes.array.isRequired
    };
  }

  render() {
    const { plugins, ...props } = this.props;

    return (
      <div className="line" {...props}>
        {plugins.map((Component, index) => {
          // +1 to skip black
          let color = colorList[index + 1] || Math.ceil(Math.random() * 7);
          return (
            <div key={index} className="wrapper" style={{ color: color, stroke: color }}>
              <Component />
            </div>
          );
        })}

        <style jsx>{`
          .line {
            display: flex;
            justify-content: space-between;
            position: absolute;
            overflow: hidden;
            bottom: 0;
            width: 100%;
            height: 18px;
            font: bold 10px Monospace;
            pointer-events: none;
            background: rgba(0, 0, 0, 0.08);
            margin: 2px 0;
            padding: 1px 10px 0;
          }
          ,
          .wrapper {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default decorate(HyperLine, 'HyperLine');
