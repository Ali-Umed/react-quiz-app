import React from "react";
import QuestionsDetail from "./QuestionsDetail.1";
import { GoChevronRight } from "react-icons/go";
import { BiAlarm } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
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
  points,
}) {
  return (
    <section
      className={
        " max-w-[23rem] min-w-[23rem] md:max-w-[30rem] md:min-w-[30rem] lg:max-w-[35rem] lg:min-w-[35rem]  min-h-[450px] flex flex-col gap-2 justify-center items-center py-5 mt-5 px-5"
      }
    >
      <header>
        <h2 className={`"text-xl  ${isDayMode ? "text-black" : "text-white"}`}>
          {" "}
          Quiz Game
        </h2>
      </header>

      <main
        className={`p-2  rounded-md mt-5 max-w-[23rem] min-w-[23rem] md:max-w-[30rem] md:min-w-[30rem] lg:max-w-[35rem] lg:min-w-[35rem]  min-h-[450px] ${
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
          <Timer
            sec_remaining={sec_remaining}
            dispatch={dispatch}
            isDayMode={isDayMode}
          />
        </div>
        <div
          className={`"text-5xl font-semibold  p-2 rounded-lg flex text-center items-center ${
            isDayMode ? "text-black bg-white" : "text-white bg-black"
          }`}
        >
          <BiDollar />
          {points}
        </div>
        {!lastQuestion && sec_remaining > 0 ? (
          <div
            onClick={() => dispatch({ type: "nextQuestion" })}
            className={`flex justify-center items-center gap-1 rounded-md bg-green-600 p-[0.45rem] hover:cursor-pointer hover:bg-green-500 ${
              answer == null ? " invisible " : "visible"
            } `}
          >
            <button>Next Question</button>
            <GoChevronRight size={25} />
          </div>
        ) : (
          <div
            onClick={() => dispatch({ type: "finish" })}
            className="flex justify-center  items-center gap-1 rounded-md bg-green-600 p-[0.65rem] hover:cursor-pointer hover:bg-green-500"
          >
            <button>finish</button>
            <GoChevronRight size={25} />
          </div>
        )}
      </footer>
    </section>
  );
}
