import React, { FC } from "react";
import s from "./square.module.css";

interface ISquareProps {
  size: number;
  grid: boolean[][];
  toggleColor: (row: number, col: number) => void;
}

export const Square: FC<ISquareProps> = ({ size, grid, toggleColor }) => {
  return (
    <div
      className={s.squareContainer}
      style={{ "--size": size } as React.CSSProperties}
    >
      {grid.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`${s.cell} ${
              grid[rowIndex][colIndex] ? s.cell_active : ""
            }`}
            onMouseEnter={() => toggleColor(rowIndex, colIndex)}
          ></div>
        ))
      )}
    </div>
  );
};
