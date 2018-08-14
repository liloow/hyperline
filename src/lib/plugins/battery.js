/* eslint no-undef: 0 */
// Note: This is to stop XO from complaining about {navigator}

import React, { Component } from 'react';
import leftPad from 'left-pad';
import BatteryIcon from './battery/battery-icon';

export default class Battery extends Component {
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

    return (
      <div id="bat" className="wrapper">
        <BatteryIcon charging={charging} percentage={Number(percentage)} /> {leftPad(percentage, 2, 0)}%
        <style jsx>{`
          .wrapper {
            display: flex;
            align-items: center;
            opacity: 1;
            transition: all 2s ease;
          }
          .wrapper.blinky {
            opacity: 0;
          }
        `}</style>
      </div>
    );
  }
}
