import { useState } from "react";

function GameBoard({ size = 6 }) {
  const [grid, setGrid] = useState(() =>
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(null))
  );
  const [player, setPlayer] = useState(0);

  const validate = (arr, mark) => {
    let count = 0;

    for (let item of arr) {
      if (item === mark) {
        count++;

        if (count === 4) return true;
      } else {
        count = 0;
      }
    }

    return false;
  };

  const checkWinner = (newGrid, currPlayer, row, col) => {
    // row logic
    if (validate(newGrid[row], currPlayer)) {
      return true;
    }

    // column logic
    const colArr = [];
    for (let i = 0; i < size; i++) {
      colArr.push(newGrid[i][col]);
    }
    if (validate(colArr, currPlayer)) {
      return true;
    }

    // diagonal top left to bottom right
    const diag1 = [];

    let r = row,
      c = col;
    while (r > 0 && c > 0) {
      r--;
      c--;
    }

    while (r < size && c < size) {
      diag1.push(newGrid[r][c]);
      r++;
      c++;
    }
    if (validate(diag1, currPlayer)) return true;

    // diagonal top right to bottom left
    const diag2 = [];
    let r2 = row,
      c2 = col;
    while (r2 > 0 && c2 < size - 1) {
      r2--;
      c2++;
    }
    while (r2 < size && c2 >= 0) {
      diag2.push(newGrid[r2][c2]);
      r2++;
      c2--;
    }
    if (validate(diag2, currPlayer)) return true;

    return false;
  };

  const handleOnPlayerClick = (e) => {
    const ele = e.target.classList.contains("cell");

    if (!ele) return;

    // const rowIndex = +e.target.dataset.row;
    const colIndex = +e.target.dataset.col;

    const newGrid = grid.map((r) => [...r]);

    for (let i = size - 1; i >= 0; i--) {
      if (newGrid[i][colIndex] === null) {
        newGrid[i][colIndex] = player;

        const isWinner = checkWinner(newGrid, player, i, colIndex);

        if (isWinner) {
          alert(`Player ${player === 0 ? "1" : "2"} win`);
          handleReset();
          return;
        }
        setPlayer((prev) => (prev === 0 ? 1 : 0));
        break;
      } else {
        continue;
      }
    }

    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid(
      Array(size)
        .fill(null)
        .map(() => Array(size).fill(null))
    );
  };

  return (
    <div className="game-board" onClick={handleOnPlayerClick}>
      {grid.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((cell, j) => {
              return (
                <button
                  key={j}
                  className={`cell ${cell === 0 && "red"} ${
                    cell === 1 && "yellow"
                  } `}
                  data-row={i}
                  data-col={j}
                ></button>
              );
            })}
          </div>
        );
      })}
      <button className="reset-game" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default GameBoard;
