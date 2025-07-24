import { useContext } from "react";
import { BiCircle } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { HiCheckCircle } from "react-icons/hi";
import {
  TasksContext,
  TasksDispatchContext,
  DayModeContext,
} from "../context/TasksConteext";

export function Options() {
  const { questions, answer, index } = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const question = questions[index];
  const hasAnswer = answer != null;
  const isDayMode = useContext(DayModeContext);

  function getOptionSize(option) {
    const textSize = option.length;
    if (textSize < 35) return "text-lg";
    if (textSize > 40) return "text-sm";
    if (textSize > 35) return "text-md";
  }

  return (
    <section className="flex flex-col gap-4 min-h-60 max-h-60 w-full">
      {question.options.map((option, idx) => {
        let optionStyle =
          "transition-all duration-200 rounded-xl px-5 py-3 flex items-center justify-between shadow cursor-pointer border font-semibold";
        if (!hasAnswer) {
          optionStyle += isDayMode
            ? " bg-blue-50 hover:bg-blue-100 border-blue-200 text-gray-800"
            : " bg-slate-800 hover:bg-teal-900 border-slate-700 text-white";
        } else if (answer === idx && idx === question.correctOption) {
          optionStyle += isDayMode
            ? " bg-green-100 border-green-400 text-green-700"
            : " bg-green-900 border-green-400 text-green-200";
        } else if (answer !== question.correctOption && answer === idx) {
          optionStyle += isDayMode
            ? " bg-red-100 border-red-400 text-red-700"
            : " bg-red-900 border-red-400 text-red-200";
        } else if (idx === question.correctOption) {
          optionStyle += isDayMode
            ? " bg-green-50 border-green-300 text-green-700"
            : " bg-green-800 border-green-300 text-green-200";
        } else {
          optionStyle += isDayMode
            ? " bg-blue-50 border-blue-200 text-gray-800"
            : " bg-slate-800 border-slate-700 text-white";
        }

        return (
          <button
            key={option}
            className={`${optionStyle} ${getOptionSize(option)}`}
            onClick={() => dispatch({ type: "newAnswer", payload: idx })}
            disabled={hasAnswer}
          >
            <span>{option}</span>
            {hasAnswer ? (
              answer === idx && idx === question.correctOption ? (
                <HiCheckCircle
                  color={isDayMode ? "green" : "lightgreen"}
                  size={24}
                />
              ) : answer !== question.correctOption && answer === idx ? (
                <CiCircleRemove color={isDayMode ? "red" : "pink"} size={24} />
              ) : idx === question.correctOption ? (
                <HiCheckCircle
                  color={isDayMode ? "green" : "lightgreen"}
                  size={24}
                />
              ) : (
                <BiCircle color={isDayMode ? "gray" : "white"} size={24} />
              )
            ) : (
              <BiCircle color={isDayMode ? "gray" : "white"} size={24} />
            )}
          </button>
        );
      })}
    </section>
  );
}
