import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import './ToolBar.css'

export default class ToolBar extends Component {
  render() {
    let min = this.props.time.m < 10 ? "0" + this.props.time.m.toString() : this.props.time.m;
    return(
      <div>
        <Row>
          <Col xs={12}>
            <div className='toolBar'>
              <div className='buttonGroup'>
                <Button iconName="play" text={'Start'} className='pt-intent-success' onClick={this.props.startSimulation} />
                <Button iconName="refresh" text={''} onClick={this.props.restartSimulation} />
                <Button iconName="pause"  disabled={false} text={''} onClick={this.props.pauseSimulation} />
              </div>
              <div className="timeindicator">
                <h4>Time: {this.props.time.h}:{ min }</h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
