{/* The Board component renders 9 squares. */}
{/* Importing the React library. */}
import React, { Component } from 'react';
{/* Importing the Square component. */}
import Square from './Square';
{/*import calculateWinner from './Winner';*/}

{/* Creating a class called Board. */}
class Board extends Component {
  renderSquare(i) {
  {/* Passing a value prop to the Square component, and update 
  the state of Board by passing down a function from Board to 
  Square. */}
    return ( 
    	<Square 
    	value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)} 
      />
	);
  }

  render() {
    return (
      <div>
      {/* Rendering a 3 x 3 grid. */}
      {/* First row */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      {/* Second row */}
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
      {/* Third row */}
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

{/* Exporting Board to be imported in Game component. */}
export default Board;