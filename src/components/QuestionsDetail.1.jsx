import React, { useContext } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Options } from "./Options";
import { TasksContext, TasksDispatchContext } from "../context/TasksConteext";

export default function QuestionsDetail({ isDayMode }) {
  const { questions, index } = useContext(TasksContext);
  const question = questions[index];
  const numQuestions = questions.length;

  return (
    <div
      className={`"max-w-[22rem] min-w-[22rem] md:max-w-[29rem] md:min-w-[29rem] lg:max-w-[33rem] lg:min-w-[33rem] min-h-[470px] max-h-[470px]  text-center "  ${
        isDayMode ? "text-black" : "text-white"
      }`}
    >
      <h1 className={`text-2xl  text-center mb-2  mt-2 min-h-8 max-h-8 `}>
        Question {index + 1}/{numQuestions}
      </h1>
      <div className=" text-center mb-4 mt-10 text-xl min-h-20">
        {question.question}
      </div>
      {<Options />}
    </div>
  );
}
