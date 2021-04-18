import React from 'react';
import './index.css';
import {Square} from './Square';
export class Board extends React.Component {
    
    renderSquare(i) {
      return <Square 
      value = {this.props.squares[i]}
      onClick = {()=>{this.props.onClick(i)}} />;
    }

    clearBoard() {
        this.setState({squares:Array(9).fill(), xIsNext: true})
    
    }
    
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }