import { useEffect } from "react";

export const useAutoScroll = (ref: HTMLElement | null, listener: any) => {
  useEffect(() => {
    if (ref?.lastElementChild) {
      ref.lastElementChild.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [listener]);
};
