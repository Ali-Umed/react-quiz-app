import { useContext, useEffect } from "react";
import {
  DayModeContext,
  TasksContext,
  TasksDispatchContext,
} from "../context/TasksConteext";

let mins = 0;
let seconds = 0;
export default function Timer() {
  const { sec_remaining } = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const isDayMode = useContext(DayModeContext);

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
