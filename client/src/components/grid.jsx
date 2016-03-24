import React from 'react';
import Cell from './cell.jsx';

const gridConfig = {
  rows: [
    {
      cells: [
        {
          size: 2,
          widget: 'calendar'
        },

      ]
    },
    {
      cells: [
        {
          size: 1,
          widget: 'timetable'
        },
      ]
    },
    {
      cells: [
        {
          size: 1,
          widget: 'weather'
        }
      ]
    }
  ]
};

class Grid extends React.Component {

  render() {
    //for gridconfig rows
    var rows = gridConfig.rows.map( (row) => {
      var cells = row.cells.map ( (cell) =>{
        return {
          size: cell.size,
          widget: require('./widgets/' + cell.widget).default,
          data: this.props[cell.widget]
        }
      });
      return {
        cells: cells
      }
    });
    var gridContent = this.renderRows(rows);

    return (
      <div>
        {gridContent}
      </div>
    )

  }

  renderRows(rows) {

    return rows.map( (row, index) => {
      return (
        <div className="row" key={index}>
          {this.renderRow(row)}
        </div>
      )
    })
  }

  renderRow(row) {
    return row.cells.map( (cell, index) => {
      return (
        <Cell content={cell} key={index} />
      )
    });

  }
}

export default Grid