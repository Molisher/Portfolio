import { useEffect, useState, useRef } from "react";

export function useMouse(
  state: number
): [number, React.MutableRefObject<HTMLUListElement>] {
  const [mouseX, setMouseX] = useState(state);
  const [divWidth, setDivWidth] = useState(0);

  const target = useRef() as React.MutableRefObject<HTMLUListElement>;

  const onMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (target.current) {
    if (target.current.offsetWidth !== divWidth) {
      setDivWidth(target.current.offsetWidth);
    }
  }

  const translate = (mouseX / window.innerWidth) * 70;

  if (-(translate - 35) > 25) {
    return [25, target];
  }
  return [-(translate - 35), target];
}
