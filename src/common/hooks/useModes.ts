import { ChangeEvent, useEffect, useState } from "react";
import { IMode } from "../types";

export const useModes = () => {
  const [modes, setModes] = useState<IMode[]>([]);
  const [activeMode, setActiveMode] = useState(-1);

  const onChangeMode = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setActiveMode(Number(value));
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://60816d9073292b0017cdd833.mockapi.io/modes"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setModes(data);
      } catch {
        throw new Error("OOOooops");
      }
    }
    getData();
  }, []);

  return { modes, activeMode, onChangeMode };
};
