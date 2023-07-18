import { useEffect } from "react";

export const Scroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
