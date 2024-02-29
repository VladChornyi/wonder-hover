import { useEffect, useState } from "react";

export const useGrid = (size: number, active: boolean) => {
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const newGrid = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => false)
    );
    setGrid(newGrid);
    setNotifications([]);
  }, [size]);

  const toggleColor = (row: number, col: number) => {
    if (!active) return;
    const notification = `row ${row + 1} col ${col + 1}`;

    setNotifications((prev) => {
      return prev.includes(notification)
        ? [...prev].filter((item) => item !== notification)
        : [...prev, notification];
    });

    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  const clearGrid = () => {
    setGrid((prev) => prev.map((item) => item.map(() => false)));
    setNotifications([]);
  };

  return { grid, toggleColor, notifications, clearGrid };
};
