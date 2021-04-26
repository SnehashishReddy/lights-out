import React from "react";
import "./Cell.scss";

interface CellProps {
  key: string;
  isLit: boolean;
}

const Cell: React.FC<CellProps> = (props) => {
  let isLitClass: string = "Cell " + (props.isLit ? "Lit" : "");

  return <td className={isLitClass} />;
};

export default Cell;
