import React from "react";
import { MouseEventHandler } from "react";
import "./Cell.scss";

interface CellProps {
  key: string;
  isLit: boolean;
  flipCellsAround(): void;
}

const Cell: React.FC<CellProps> = (props) => {
  const handleClick = (evt: any): void => {
    props.flipCellsAround();
  };
  let isLitClass: string = "Cell " + (props.isLit ? "Lit" : "");

  return <td className={isLitClass} onClick={handleClick} />;
};

export default Cell;
