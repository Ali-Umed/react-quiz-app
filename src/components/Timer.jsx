import { useEffect } from "react";

let mins = 0;
let seconds = 0;
export default function Timer({ sec_remaining, dispatch }) {
  mins = Math.floor(sec_remaining / 60);
  seconds = sec_remaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div>
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
