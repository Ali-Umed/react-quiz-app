import { useContext } from "react";
import winner from "../../src/images/winner.png";
import {
  DayModeContext,
  TasksContext,
  TasksDispatchContext,
} from "../context/TasksConteext";

export default function Result() {
  const { coins } = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const isDayMode = useContext(DayModeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center rounded-xl shadow-lg p-8 mt-10 max-w-md mx-auto ${
        isDayMode ? "bg-white text-black" : "bg-slate-800 text-white"
      }`}
    >
      <img src={winner} alt="" className="w-48 mb-6" />
      <h1 className="text-2xl font-bold mb-2">Coins +{coins}</h1>
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="mt-6 px-6 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-500 transition"
      >
        Exit
      </button>
    </div>
  );
}
