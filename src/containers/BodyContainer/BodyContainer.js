import React, { Component } from 'react';
import ToolBar from '../../components/Body/ToolBar';

export default class BodyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { time: {
                      h: 11,
                      m: 0
                  },
                  started: false
                 }
    this.startSimulation = this.startSimulation.bind(this);
    this.restartSimulation = this.restartSimulation.bind(this);
    this.pauseSimulation = this.pauseSimulation.bind(this);
  }

  startSimulation() {
    if(!this.state.started) {
      let _intervalId = setInterval(() => {
        let newH, newM;
        if(this.state.time.h === 23 && this.state.time.m === 59) {
          return clearInterval(this);
        }

        if(parseInt(this.state.time.m, 10) < 59) {
          newM = parseInt(this.state.time.m, 10) + 1;
          newH = this.state.time.h;
        } else {
          newM = 0;
          newH = this.state.time.h + 1;
        }
        this.setState({ time: { h: newH, m: newM } });
      }, 100);
      this.setState({ started: true, intervalId: _intervalId });
    } else {
      return console.log('Simulation has already started.');
    }
  }

  restartSimulation() {
    this.setState({ time: { h: 11, m: 0 }, started: false })
    return clearInterval(this.state.intervalId);
  }

  pauseSimulation() {
    this.setState({ started: false });
    return clearInterval(this.state.intervalId);
  }

  render() {
    return(
      <div>
        <ToolBar time={this.state.time}
          startSimulation={this.startSimulation}
          restartSimulation={this.restartSimulation}
          pauseSimulation={this.pauseSimulation} />
      </div>
    );
  }
}
