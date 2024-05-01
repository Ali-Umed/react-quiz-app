import React, { Dispatch } from "react";

export default function StartScreen({ dispatch, numQuestions }) {
  return (
    <div className="flex flex-col">
      <h1>welcome the questions is ready </h1>
      <button
        className="bg-blue-500 mt-5"
        onClick={() => dispatch({ type: "start" })}
      >
        start
      </button>
    </div>
  );
}
