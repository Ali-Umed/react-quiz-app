import React, { useState, useEffect } from "react";

export default function Timer({ sec_remaining }) {
  const [timer, setTimer] = useState(sec_remaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevSecond) => prevSecond - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return timer;
}
