{/* Importing the React library. */}
import React, { Component } from 'react';

{/* Creating a functional component called Square and receives
props. */}
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
     {props.value}
     {/* Returns a button to make the Square component fill 
     in an "X" or "Bomb" when user click it, depends of the 
     current state. */}
    </button>
  );
}

{/*
I replaced the following class for the functional component above.
class Square extends Component {
  constructor() { 
    super();
      this.state = { value: null };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
      {this.props.value} </button>
    );
  }
}
*/}

{/* Exporting Square component to be imported in Board.js. */}
export default Square;