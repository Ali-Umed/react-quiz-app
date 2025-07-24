import React, { useContext } from "react";
import programmingImage from "../images/programming.webp";
import sportsImage from "../images/sports.avif";
import mathImage from "../images/math.jpg";
import geography from "../images/geography.jpeg";
import history from "../images/history.jpeg";
import { DayModeContext, TasksDispatchContext } from "../context/TasksConteext";

export default function StartScreen({}) {
  const dispatch = useContext(TasksDispatchContext);
  const isDayMode = useContext(DayModeContext);

  const questionTypes = [
    {
      type: "Programming",
      // color: "bg-yellow-100",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: true,
      image: programmingImage,
    },
    {
      type: "sports",
      // color: "bg-green-100",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: false,
      image: sportsImage,
    },
    {
      type: "Math",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: false,
      image: mathImage,
    },
    {
      type: "history",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: false,
      image: history,
    },
    {
      type: "geography",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: false,
      image: geography,
    },
  ];

  const handleStart = (type) => {
    dispatch({ type: "start", questionType: type });
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {questionTypes.map((typeObj, index) => (
          <div
            onClick={() => handleStart(typeObj.type)}
            key={index}
            className={`rounded-xl cursor-pointer shadow-sm hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center ${
              typeObj.color
            } ${isDayMode ? "shadow-gray-300" : "shadow-slate-700"}`}
          >
            <img
              src={typeObj.image}
              alt={typeObj.type}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
            />
            <h2
              className={`text-lg font-bold ${
                isDayMode ? "text-black" : "text-white"
              }`}
            >
              {typeObj.type} Questions
            </h2>
            <button className="mt-3 px-6 py-2 mb-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 font-semibold shadow">
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
