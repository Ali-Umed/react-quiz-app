import React, { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { BiAlarm } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import Timer from "./Timer";
import {
  DayModeContext,
  TasksContext,
  TasksDispatchContext,
} from "../context/TasksConteext";
import QuestionsDetail from "./QuestionsDetail";

export default function Questions() {
  const { sec_remaining, questions, answer, index, coins } =
    useContext(TasksContext);
  const isDayMode = useContext(DayModeContext);

  const dispatch = useContext(TasksDispatchContext);
  const lastQuestion = index == questions.length - 1;

  return (
    <section className="max-w-xl w-full flex flex-col gap-4 justify-center items-center py-8">
      <main className={`p-4 rounded-xl   w-full min-h-[450px]  `}>
        <QuestionsDetail />
      </main>

      <footer className="flex justify-between items-center w-full mt-4">
        <div
          className={` flex justify-center items-center gap-1 rounded-md   p-[0.65rem] ${
            isDayMode ? "bg-[#fff]" : "bg-slate-800 "
          }`}
        >
          <BiAlarm size={25} color={` ${isDayMode ? "black" : "white"}`} />
          <Timer />
        </div>
        <div
          className={`"text-5xl font-semibold  p-2 rounded-lg flex text-center items-center ${
            isDayMode ? "text-black bg-white" : "text-white bg-black"
          }`}
        >
          <BiDollar />
          {coins}
        </div>
        {!lastQuestion && sec_remaining > 0 ? (
          <div
            onClick={() => dispatch({ type: "nextQuestion" })}
            className={`flex justify-center items-center gap-2 rounded-full bg-green-600 px-5 py-2 hover:bg-green-500 transition ${
              answer == null ? "invisible" : "visible"
            }`}
          >
            <button className="font-semibold text-white">Next Question</button>
            <GoChevronRight size={25} />
          </div>
        ) : (
          lastQuestion &&
          answer != null && (
            <div
              onClick={() => dispatch({ type: "prize" })}
              className="flex justify-center  items-center gap-1 rounded-md bg-green-600 p-[0.65rem] hover:cursor-pointer hover:bg-green-500"
            >
              <button>finish</button>
              <GoChevronRight size={25} />
            </div>
          )
        )}
      </footer>
    </section>
  );
}
