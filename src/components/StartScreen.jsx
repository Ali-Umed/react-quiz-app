import React, { Dispatch } from "react";
import programmingImage from "../images/programming.webp";
import sportsImage from "../images/sports.avif";
import mathImage from "../images/math.jpg";
import geography from "../images/geography.jpeg";
import history from "../images/history.jpeg";

export default function StartScreen({ dispatch, isDayMode }) {
  const questionTypes = [
    {
      type: "Programming",
      // color: "bg-yellow-100",
      color: isDayMode ? "bg-[#fff]" : "bg-slate-800 ",
      isProgramming: true,
      image: programmingImage,
    },
    {
      type: "Sports",
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

  const handleStart = (isProgramming, type) => {
    if (isProgramming) {
      dispatch({ type: "start" });
    } else {
      alert(`No ${type} questions available!`);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen p-3  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {questionTypes.map((type, index) => (
          <div
            onClick={() => handleStart(type.isProgramming, type.type)}
            key={index}
            className={`rounded-lg  cursor-pointer  ${
              type.color
            } shadow-md hover:shadow-lg 
             ${
               isDayMode
                 ? "  shadow-gray-300 hover:shadow-gray-300"
                 : "shadow-slate-600 hover:shadow-slate-600"
             } 
            flex flex-col items-center justify-center`}
          >
            <img
              src={type.image}
              alt={type.type}
              className="w-full h-48 mb-4"
            />
            <h2
              className={`text-lg font-bold ${
                isDayMode ? "text-black" : "text-white"
              }`}
            >
              {type.type} Questions
            </h2>
            <button
              className="mt-3 px-4 py-2 mb-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
              // onClick={() => handleStart(type.isProgramming, type.type)}
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
