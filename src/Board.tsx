import React from "react";
import Cell from "./Cell";
import "./Board.scss";

interface BoardProps {
  nrows: number;
  ncols: number;
  chanceIsLit: number;
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

  const renderBoard = (): JSX.Element[] => {
    let tableBoard: JSX.Element[] = [];
    for (let y: number = 0; y < props.nrows; y++) {
      let row: JSX.Element[] = [];
      for (let x: number = 0; x < props.ncols; x++) {
        let c = `${y}-${x}`;
        row.push(<Cell key={c} isLit={board[y][x]} />);
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
