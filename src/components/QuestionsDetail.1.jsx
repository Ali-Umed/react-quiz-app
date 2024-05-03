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
    <div className={`"p-2"  ${isDayMode ? "text-black" : "text-white"}`}>
      <h1 className={`text-2xl  text-center mb-2  `}>
        Question {index}/{numQuestions}
      </h1>
      <div className=" text-center mb-4 mt-10 text-xl flex  flex-nowrap">
        {question.question}
      </div>

      {<Options question={question} answer={answer} dispatch={dispatch} />}
    </div>
  );
}
