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
  }

  startSimulation() {
    if(!this.state.started) {
      setInterval(() => {
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
      }, 10);
      this.setState({ started: true });
    } else {
      return console.log('Simulation has already started.');
    }
  }

  render() {
    return(
      <div>
        <ToolBar time={this.state.time} startSimulation={this.startSimulation}/>
      </div>
    );
  }
}
