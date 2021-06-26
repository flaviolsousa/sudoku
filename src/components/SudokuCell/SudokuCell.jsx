import React, { Component } from 'react';
import './style.css';

class SudokuCell extends Component {
    render() {
        return (
            <div className={ `SudokuCell SudokuCell-col-${this.props.col} SudokuCell-lin-${this.props.lin}` }>
                <span>{this.props.col + 1}</span>
            </div>
        );
    }
}

export default SudokuCell;