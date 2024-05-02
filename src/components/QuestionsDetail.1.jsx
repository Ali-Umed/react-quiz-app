import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Options } from "./Options";

export default function QuestionsDetail({
  question,
  dispatch,
  answer,
  isDayMode,
}) {
  return (
    <div className={`"p-2"  ${isDayMode ? "text-black" : "text-white"}`}>
      <h1 className={`text-2xl  text-center mb-2  `}>Question 06/20</h1>
      <p className="  mb-4">{question.question}</p>

      {<Options question={question} answer={answer} dispatch={dispatch} />}
    </div>
  );
}
