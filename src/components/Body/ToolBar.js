import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@blueprintjs/core';
import './ToolBar.css'

export default class ToolBar extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col xs={12}>
            <div className='toolBar'>
              <Col xs={1}>
                <Button iconName="play" text={'Start'} className='pt-intent-success' onClick={this.props.startSimulation} />
              </Col>
              <Col xs={4}>
                <div className="timeindicator">
                  <h4>Time: {this.props.time.h}:{this.props.time.m}</h4>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
