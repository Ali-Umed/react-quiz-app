import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Options } from "./Options";

export default function QuestionsDetail({
  question,
  dispatch,
  answer,
  isDayMode,
  numQuestions,
  index,
}) {
  return (
    <div
      className={`"max-w-[22rem] min-w-[22rem] md:max-w-[29rem] md:min-w-[29rem] lg:max-w-[33rem] lg:min-w-[33rem] min-h-[450px]  text-center "  ${
        isDayMode ? "text-black" : "text-white"
      }`}
    >
      <h1 className={`text-2xl  text-center mb-2  `}>
        Question {index + 1}/{numQuestions}
      </h1>
      <div className=" text-center mb-4 mt-10 text-xl ">
        {question.question}
      </div>

      {<Options question={question} answer={answer} dispatch={dispatch} />}
    </div>
  );
}
