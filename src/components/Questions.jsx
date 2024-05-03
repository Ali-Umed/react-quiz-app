import React from "react";
import QuestionsDetail from "./QuestionsDetail.1";
import { GoChevronRight } from "react-icons/go";
import { BiAlarm } from "react-icons/bi";
import Timer from "./Timer";

export default function Questions({
  sec_remaining,
  question,
  dispatch,
  answer,
  lastQuestion,
  isDayMode,
  index,
  numQuestions,
}) {
  return (
    <section
      className={
        "max-w-[35rem] min-w-[35rem]  min-h-[450px] flex flex-col gap-2 justify-center items-center py-5 mt-5 px-5"
      }
    >
      <header>
        <h2 className={`"text-xl  ${isDayMode ? "text-black" : "text-white"}`}>
          {" "}
          Quiz Game
        </h2>
      </header>

      <main
        className={`p-2 rounded-md mt-5 max-w-[35rem] min-w-[35rem]  min-h-[450px] ${
          isDayMode ? "bg-[#fff]" : "bg-slate-800 "
        }`}
      >
        <QuestionsDetail
          question={question}
          dispatch={dispatch}
          answer={answer}
          isDayMode={isDayMode}
          numQuestions={numQuestions}
          index={index}
        />
      </main>

      <footer className="flex justify-between items-center w-full my-3">
        <div
          className={` flex justify-center items-center gap-1 rounded-md   p-[0.65rem] ${
            isDayMode ? "bg-[#fff]" : "bg-slate-800 "
          }`}
        >
          <BiAlarm size={25} color={` ${isDayMode ? "black" : "white"}`} />
          <p className={`"text-xl  ${isDayMode ? "text-black" : "text-white"}`}>
            <Timer sec_remaining={sec_remaining} />
          </p>
        </div>
        {sec_remaining >= 0 && !lastQuestion ? (
          <div
            onClick={() => dispatch({ type: "nextQuestion" })}
            className="flex justify-center items-center gap-1 rounded-md bg-green-600 p-[0.65rem] hover:cursor-pointer hover:bg-green-500"
          >
            <button>Next Question</button>
            <GoChevronRight size={25} />
          </div>
        ) : (
          <div
            onClick={() => dispatch({ type: "finish" })}
            className="flex justify-center items-center gap-1 rounded-md bg-green-600 p-[0.65rem] hover:cursor-pointer hover:bg-green-500"
          >
            <button>restart</button>
            <GoChevronRight size={25} />
          </div>
        )}
      </footer>
    </section>
  );
}
