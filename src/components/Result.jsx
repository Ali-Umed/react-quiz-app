import { useContext } from "react";
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
      <div className="mb-6 flex flex-col items-center">
        <span className="text-4xl font-extrabold mb-2">
          🎉 Congratulations!
        </span>
        <span className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold text-xl shadow mt-2">
          +{coins} Coins
        </span>
      </div>
      <p className="text-lg mb-4">You finished the quiz. Great job!</p>
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="mt-4 px-6 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-500 transition"
      >
        Exit
      </button>
    </div>
  );
}
