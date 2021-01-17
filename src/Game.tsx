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
  const header = Array(size).fill(null).map((_, i) =>
    <th>
      {String.fromCodePoint('A'.charCodeAt(0) + i)}
    </th>
  );
  const row = Array(size).fill(<td><Square /></td>);
  const board = Array(size).fill(null).map((_, i) =>
    <tr>
      <td>{i + 1}</td>{row}
    </tr>
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <td></td>{header}
          </tr>
        </thead>
        <tbody>
          {board}
        </tbody>
      </table>
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