import React, { useEffect, useReducer, useState } from "react";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Questions from "./components/Questions";
import SpinWeel from "./components/SpinWheel";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";

const sec_per_questions = 30;

const initState = {
  questions: [],
  point: 0,
  status: "loading",
  sec_remaining: null,
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        sec_remaining: state.questions.length * sec_per_questions,
      };
  }
}

function App() {
  const [{ questions, points, status, sec_remaining, index }, dispatch] =
    useReducer(reducer, initState);

  const numQuestions = questions.length;

  const [isDayMode, setIsDayMode] = useState(true);
  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  bg-slate-900 text-white px-2 ">
      <div className="col-span-3">
        <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
      </div>
      <div className="col-span-3 place-self-center  min-h-max ">
        {status == "loading" && <Loader />} {status == "error" && <Error />}
        {status == "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status == "active" && (
          <Questions
            question={questions[index]}
            sec_remaining={sec_remaining}
            dispatch={dispatch}
          />
        )}
      </div>
      <Footer />
      {/* <SpinWeel /> */}
      {/* <Coins /> */}
    </div>
  );
}

export default App;
