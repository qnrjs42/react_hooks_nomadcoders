import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return element;
};