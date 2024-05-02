import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Options } from "./Options";

export default function QuestionsDetail({ question, dispatch, answer }) {
  return (
    <div className="p-2">
      <h1 className="text-2xl text-slate-100 text-center mb-2">
        Question 06/20
      </h1>
      <p className="text-slate-300 mb-4">{question.question}</p>

      {<Options question={question} answer={answer} dispatch={dispatch} />}
    </div>
  );
}
