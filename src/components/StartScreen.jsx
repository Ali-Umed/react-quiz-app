import React, { Dispatch } from "react";

export default function StartScreen({ dispatch, numQuestions, isDayMode }) {
  // Dummy data for different types of questions
  const questionTypes = [
    { type: "Programming", color: "bg-yellow-100", isProgramming: true },
    { type: "Sports", color: "bg-green-100", isProgramming: false },
    { type: "English", color: "bg-blue-100", isProgramming: false },
  ];

  const handleStart = (isProgramming, type) => {
    if (isProgramming) {
      dispatch({ type: "start" });
    } else {
      alert(`No ${type} questions available!`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {questionTypes.map((type, index) => (
          <div key={index} className={`rounded-lg p-4 ${type.color} shadow-md`}>
            <h2
              className={`text-lg font-bold ${
                isDayMode ? "text-black" : "text-white"
              }`}
            >
              {type.type} Questions
            </h2>
            <button
              className="mt-3 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
              onClick={() => handleStart(type.isProgramming, type.type)}
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
