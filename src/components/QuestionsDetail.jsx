import React from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function QuestionsDetail({ question, dispatch, answer }) {
  return (
    <div className="p-2">
      <h1 className="text-2xl text-slate-100 text-center mb-2">
        Question 06/20
      </h1>
      <p className="text-slate-300 mb-4">{question.question}</p>

      <section className="flex flex-col justify-center items-center gap-3">
        {question.options.map((option, index) => (
          <div
            className={`${
              answer == question.correctOption ? "selected" : "unselected"
            } 
        `}
          >
            <button
              className="flex justify-between w-full"
              key={option}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {option}
              <HiCheckCircle color="green" size={30} />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
