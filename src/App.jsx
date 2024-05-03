import React, { useEffect, useReducer, useState } from "react";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Questions from "./components/Questions";
import SpinWeel from "./components/SpinWheel";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import jsonQuestions from "../data/questions.json";

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
    case "newAnswer":
      return {
        ...state,
        sec_remaining: state.questions.length * sec_per_questions,
        answer: action.payload,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...initState,
        status: "ready",
        questions: state.questions,
      };
  }
}

function App() {
  const [
    { questions, points, status, sec_remaining, index, answer },
    dispatch,
  ] = useReducer(reducer, initState);
  const numQuestions = questions.length;

  const [isDayMode, setIsDayMode] = useState(true);
  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) =>
        dispatch({ type: "dataReceived", payload: jsonQuestions })
      );
  }, []);

  return (
    <div
      className={`"w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   text-white  " ${
        isDayMode ? "bg-cyan-50" : "bg-slate-900"
      }`}
    >
      <div className="col-span-3 fixed top-0 w-full">
        <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
      </div>
      <div className={`col-span-3 place-self-center  min-h-max  `}>
        {status == "loading" && <Loader />} {status == "error" && <Error />}
        {status == "ready" && (
          <StartScreen
            dispatch={dispatch}
            numQuestions={numQuestions}
            isDayMode={isDayMode}
          />
        )}
        {status == "active" && (
          <Questions
            question={questions[index]}
            sec_remaining={sec_remaining}
            dispatch={dispatch}
            answer={answer}
            lastQuestion={index == numQuestions - 1}
            numQuestions={numQuestions}
            index={index}
            isDayMode={isDayMode}
          />
        )}
      </div>
      <Footer isDayMode={isDayMode} />
      {/* <SpinWeel /> */}
      {/* <Coins /> */}
    </div>
  );
}

export default App;
