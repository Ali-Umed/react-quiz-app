import { useEffect } from "react";

let mins = 0;
let seconds = 0;
export default function Timer({ sec_remaining, dispatch, isDayMode }) {
  mins = Math.floor(sec_remaining / 60);
  seconds = sec_remaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className={`"text-xl  ${isDayMode ? "text-black" : "text-white"}`}>
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
