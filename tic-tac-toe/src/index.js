{/* Importing React library. */}
import React from 'react';
{/* Importing React DOM library. */}
import ReactDOM from 'react-dom';
{/* Importing App. Basically is the React logo. */}
import App from './App';
{/* Importing the Game component. */}
import Game from './Game';
{/* Importing the style. */}
import './index.css';

{/* Rendering the following components in the DOM: */}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

{/* We use document.getElementById('root') because
in public/index.html there is a div with id = "root"
that will be displaying the components listed inside
ReactDOM.render. */}