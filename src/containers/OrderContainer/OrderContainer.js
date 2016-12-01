import React, { Component } from 'react';
import './OrderContainer.css'
import { Table, Column, Cell } from '@blueprintjs/table'

import OpenOrderStore from '../../stores/OpenOrderStore'
import OpenOrderActions from '../../actions/OpenOrderActions'

export default class OrderContainer extends Component {
  constructor(props){
    super(props)

    this.state = { openOrders: OpenOrderStore.getOpenOrders() }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    OpenOrderActions.getOpenOrders();
    OpenOrderStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    OpenOrderStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({ openOrders: OpenOrderStore.getOpenOrders() });
  }


  render() {
    console.log('openOrders', this.state.openOrders);
    const renderCell = (rowIndex: number) => {
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };

    const renderQueueCell = (rowIndex: number) => {
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };

    return(
      <div>
        <div className='titlebox text-center'>
          <h3 className='title noMarPad'>Orders</h3>
        </div>
        <Table numRows={100} columnWidths={[160,160,160,160,160,160]} isColumnResizable={false}>
          <Column name="Queue" renderCell={renderQueueCell} />
          <Column name="Processing" renderCell={renderCell} />
          <Column name="Dispatching" renderCell={renderCell} />
          <Column name="Ready" renderCell={renderCell} />
          <Column name="Under delivery" renderCell={renderCell} />
          <Column name="Delivered" renderCell={renderCell} />
        </Table>
      </div>
    );
  }
}
