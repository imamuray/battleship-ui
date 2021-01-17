import React, { useState } from 'react';
import './Game.css';

interface SquareProps {
  count: number,
  incrementBoardCount: () => void
}

function Square(props: SquareProps) {
  const [localCount, setLocalCount] = useState(0);
  const handleClick = () => {
    props.incrementBoardCount();
    setLocalCount(props.count)
  }
  return (
    <button className="square"
      onClick={handleClick}>
      {localCount}
    </button>
  );
}

function Board() {
  // 手数のカウント
  const [count ,setCount] = useState(0);
  // const [board, setBoard] = useState(Array<number>(size).fill(0).map(() => Array<number>(size).fill(0)));

  const incrementBoardCount = () => {
    setCount(count + 1);
  };

  const size = 10;
  const header = Array(size).fill(null).map((_, i) =>
    <th>
      {String.fromCodePoint('A'.charCodeAt(0) + i)}
    </th>
  );
  const row = Array(size).fill(
    <td>
      <Square count={count} incrementBoardCount={incrementBoardCount}/>
    </td>
  );
  const boardUI = Array(size).fill(null).map((_, i) =>
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
          {boardUI}
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
          マスをクリックするとクリック回数が表示される
        </p>
      </div>
    </div>
  );
}

export default Game;