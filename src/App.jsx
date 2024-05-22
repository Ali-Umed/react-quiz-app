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
import Result from "./components/Result";
import {
  TasksContext,
  TasksDispatchContext,
} from "./context/TasksConteext.jsx";

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
      return {
        ...state,
        questions: randomQuestions(action.payload),
        status: "ready",
      };
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
    case "prize":
      return {
        ...state,
        status: "result",
      };
    case "finish":
      return {
        ...initState,
        status: "ready",
        questions: randomQuestions(state.questions),
      };
  }
}

function randomQuestions(questions) {
  let newArray = questions.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray.slice(0, 2);
}

function App() {
  const [
    // { questions, points, status, sec_remaining, index, answer },
    tasks,
    dispatch,
  ] = useReducer(reducer, initState);

  const [haveAnAccount, setHaveAnAccount] = useState(null);
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
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div
          className={`"w-screen min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   text-white  " ${
            isDayMode ? "bg-cyan-50" : "bg-slate-900"
          }`}
        >
          <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
          <div
            className={`col-span-3 place-self-center  min-h-max md:mt-28 mt-20 `}
          >
            {tasks.status == "loading" && <Loader />}{" "}
            {tasks.status == "error" && <Error />}
            {tasks.status == "ready" &&
              (haveAnAccount ? (
                <StartScreen dispatch={dispatch} isDayMode={isDayMode} />
              ) : (
                <CreateAccount
                  setHaveAnAccount={setHaveAnAccount}
                  isDayMode={isDayMode}
                />
              ))}
            {tasks.status == "active" && <Questions isDayMode={isDayMode} />}
            {tasks.status == "result" && (
              <Result
                points={points}
                dispatch={dispatch}
                isDayMode={isDayMode}
              />
            )}
          </div>
          <Footer isDayMode={isDayMode} />
          {/* <SpinWeel /> */}
          {/* <Coins /> */}
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
