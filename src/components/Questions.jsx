import React from "react";
import QuestionsDetail from "./QuestionsDetail";
import { GoChevronRight } from "react-icons/go";
import { BiAlarm } from "react-icons/bi";
import Timer from "./Timer";

export default function Questions({
  sec_remaining,
  question,
  dispatch,
  answer,
}) {
  return (
    <section className="w-[35rem] flex flex-col gap-2 justify-center items-center py-5 mt-5">
      <header>
        <h2 className="text-xl text-slate-400">Islamic Questions</h2>
      </header>

      <main className="p-2 bg-slate-800 rounded-md mt-5 max-w-[35rem]">
        <QuestionsDetail
          question={question}
          dispatch={dispatch}
          answer={answer}
        />
      </main>

      <footer className="flex justify-between items-center w-full my-3">
        <div className="flex justify-center items-center gap-1 rounded-md bg-slate-800 p-[0.65rem]">
          <BiAlarm size={25} />
          <p>
            <Timer sec_remaining={sec_remaining} />
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 rounded-md bg-green-600 p-[0.65rem] hover:cursor-pointer hover:bg-green-500">
          <button>Next Question</button>
          <GoChevronRight size={25} />
        </div>
      </footer>
    </section>
  );
}
