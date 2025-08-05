import { useEffect, useState } from "react";

export function useResponsiveModelScale() {
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) setScale(0.08);
      else if (width < 1024) setScale(0.7);
      else setScale(0.15);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
