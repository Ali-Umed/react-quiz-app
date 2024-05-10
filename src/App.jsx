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
import CreateAccount from "./components/CreateAccount";

const sec_per_questions = 10;

const initState = {
  questions: [],
  points: 0,
  status: "loading",
  sec_remaining: 0,
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
        answer: action.payload,
        points:
          action.payload == state.questions[state.index].correctOption
            ? state.points + state.questions[state.index].points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "tick":
      return {
        ...state,
        sec_remaining: state.sec_remaining > 0 ? state.sec_remaining - 1 : 0,
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

  const [haveAnAccount, setHaveAnAccount] = useState(null);
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
        dispatch({ type: "dataReceived", payload: jsonQuestions.questions })
      );
  }, []);

  return (
    <div
      className={`"w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   text-white  " ${
        isDayMode ? "bg-cyan-50" : "bg-slate-900"
      }`}
    >
      <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
      <div
        className={`col-span-3 place-self-center  min-h-max md:mt-28 mt-20 `}
      >
        {status == "loading" && <Loader />} {status == "error" && <Error />}
        {status == "ready" &&
          (haveAnAccount ? (
            <StartScreen
              dispatch={dispatch}
              numQuestions={numQuestions}
              isDayMode={isDayMode}
            />
          ) : (
            <CreateAccount setHaveAnAccount={setHaveAnAccount} />
          ))}
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
            points={points}
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
