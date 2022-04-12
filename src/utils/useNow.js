import { useState, useEffect } from "react";

export default function useNow() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let id;
    function repaint() {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    }
    repaint();
    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return now;
}
