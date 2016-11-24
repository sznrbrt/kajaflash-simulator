import React, { Component } from 'react';
import './OrderContainer.css'
import { Table, Column, Cell } from '@blueprintjs/table'

export default class OrderContainer extends Component {
  // constructor(props){
  //   super(props)
  //
  // }

  render() {
    const renderCell = (rowIndex: number) => {
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };

    return(
      <div>
        <div className='titlebox text-center'>
          <h3 className='title noMarPad'>Orders</h3>
        </div>
        <Table numRows={100} columnWidths={[160,160,160,160,160,160]} isColumnResizable={false}>
          <Column name="Queue" renderCell={renderCell} />
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
