import React from "react";
import Cell from "./Cell";
import "./Board.scss";

interface BoardProps {
  nrows: number;
  ncols: number;
  chanceIsLit: number;
}

function add(a,b) {
  return a+b;
}

const Board: React.FC<BoardProps> = (props) => {
  const createBoard = (): boolean[][] => {
    let board: boolean[][] = [];
    for (let y: number = 0; y < props.nrows; y++) {
      let row: boolean[] = [];
      for (let x: number = 0; x < props.ncols; x++) {
        row.push(Math.random() < props.chanceIsLit);
      }
      board.push(row);
    }
    return board;
  };

  let [board, setBoard] = React.useState(createBoard());

  const flipCellsAroundIt = (c: string): void => {
    let temporaryBoard: boolean[][] = [...board];
    let [y, x] = c.split("-").map(Number);

    const flipCell = (y: number, x: number): void => {
      if (x >= 0 && x < props.ncols && y >= 0 && y < props.nrows) {
        temporaryBoard[y][x] = !temporaryBoard[y][x];
      }
    };

    flipCell(y, x);

    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);

    setBoard(temporaryBoard);
  };

  const renderBoard = (): JSX.Element[] => {
    let tableBoard: JSX.Element[] = [];
    for (let y: number = 0; y < props.nrows; y++) {
      let row: JSX.Element[] = [];
      for (let x: number = 0; x < props.ncols; x++) {
        let c = `${y}-${x}`;
        row.push(
          <Cell
            key={c}
            isLit={board[y][x]}
            flipCellsAround={() => flipCellsAroundIt(c)}
          />
        );
      }
      tableBoard.push(<tr key={y}>{row}</tr>);
    }

    return tableBoard;
  };

  return (
    <table className="Board">
      <tbody>{renderBoard()}</tbody>
    </table>
  );
};

export default Board;
