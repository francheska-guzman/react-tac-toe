{/* The Game component renders a board with some placeholders. */}

{/* Importing the React library. */}
import React, { Component } from 'react';
{/* Importing the Board component. */}
import Board from './Board';
{/* Importing the function to check a winner. */}
import calculateWinner from './Winner';

let Boom = <img className='bomb' src={require('../public/images/bomb.gif')}/>;

{/* Creating a class called Game. */}
class Game extends Component {
  constructor() {
  {/* Setting up the initial state. */}
  {/* super(); is to define the constructor of a subclass. */}
    super();
    this.state = {
      history: [{
      squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
    {/* The initial state contains an array with 9 nulls */}
    {/* The Game component stores which squares are filled. */}
    {/* xIsNext Default the first move to be by 'X'. */}
  }

 handleClick(i) {
    {/* Updating stepNumber when a new move is made. */}
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    {/* There are two methods to change data, mutate and replace.
    .slice() is used to copy the squares array instead 
    of mutating the existing array. */}
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : Boom;
    {/* If this.state.xIsNext is true then 'X', otherwise is bomb turn. */}
    this.setState({
      history: history.concat([{
      squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    {/* Game's handleClick can push a new entry onto the stack 
    by concatenating the new history entry to make a new 
    history array. */}
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  {/* The above jumpTo method is to update the state of stepNumber. */}
  }

  render() {
  	const history = this.state.history;
  	const current = history[this.state.stepNumber];
    {/* Removed: const current = history[history.length - 1]; */}
    const winner = calculateWinner(current.squares);
    {/* Stores the history of moves during the game. */}
    const moves = history.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start';
    {/* Creating a dynamic li for each move inside <ol>{moves}</ol> (line 102). */} 
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    }); 

    let status;
    {/* This is the same {status} in line 92 (inside render method). */}
    if (winner) {
    {/* If winner, display the winner. */}
      status = 'We have a winner! =D';
    } else {
    {/* Else, display the turn. */}
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'Bomb');
    {/* If this.state.xIsNext is true then 'X', 
    otherwise is 'Bomb' turn. */}
    }

    return (
      <div className="game">
       {/* {status} display the who is the turn or who win. */}
       <div className="status-info">{status}</div>
        <div className="game-board">
          {/* Using the Board component. */}
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          {/* Displaying move information. */}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

{/* Exporting Game to be imported in index.js. */}
export default Game;