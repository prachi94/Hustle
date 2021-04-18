import React from 'react';
import './index.css';
export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
      return (
        <button className="square" 
        onClick = {()=>{this.props.onClick()}}>
          {/* {this.state.squares[this.props.value]} */}
          {this.props.value}
        </button>
      );
    }
  }
  