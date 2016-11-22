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
              <Col xs={4}>
                <Button iconName="play" text={'Start'} className='pt-intent-success' />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
