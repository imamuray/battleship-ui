import React, { useState } from 'react';
import './Game.css';

function Square() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button className="square"
      onClick={() => setIsOn(!isOn)}>
      {isOn ? "1" : "0"}
    </button>
  );
}

function Board() {
  const size = 10;
  const row = Array(size).fill(<td><Square /></td>);
  const squares = Array(size).fill(<tr>{row}</tr>)
  return (
    <>
      <table>{squares}</table>
    </>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <h1>Battleship Game</h1>
        <p>
          マスをクリックすると0と1が切り替わる
        </p>
      </div>
    </div>
  );
}

export default Game;