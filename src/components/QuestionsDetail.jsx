import React, { useContext } from "react";
import { Options } from "./Options";
import { DayModeContext, TasksContext } from "../context/TasksConteext";

export default function QuestionsDetail() {
  const { questions, index } = useContext(TasksContext);
  const question = questions[index];
  const numQuestions = questions.length;
  const isDayMode = useContext(DayModeContext);

  return (
    <div
      className={`max-w-lg w-full min-h-[470px] max-h-[470px] mx-auto rounded-xl shadow-lg p-6 flex flex-col justify-start items-center ${
        isDayMode
          ? "bg-gradient-to-br from-white via-slate-100 to-cyan-50 text-black"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      }`}
    >
      <h1 className="text-xl font-semibold mb-2 mt-2 tracking-wide">
        Question <span className="font-bold">{index + 1}</span>/{numQuestions}
      </h1>
      <div className="text-center mb-6 mt-8 text-2xl font-bold min-h-20">
        {question.question}
      </div>
      <Options />
    </div>
  );
}
