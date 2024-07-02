import React, { useContext, useEffect, useReducer, useState } from "react";
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
  AccountContext,
  DayModeContext,
  TasksContext,
  TasksDispatchContext,
} from "./context/TasksConteext.jsx";

const sec_per_questions = 10;

const initState = {
  questions: [],
  coins: 0,
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
        coins:
          action.payload == state.questions[state.index].correctOption
            ? state.coins + state.questions[state.index].points
            : state.coins,
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

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initState);

  const [account, setAccount] = useState(null);
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) =>
        dispatch({ type: "dataReceived", payload: jsonQuestions.questions })
      );
  }, []);

  useEffect(() => {
    const userAccountString = localStorage.getItem("account");

    if (userAccountString) {
      const userAccount = JSON.parse(userAccountString);
      setAccount(userAccount);
      setIsDayMode(userAccount.isDayMode);
    }
  }, []);

  useEffect(() => {
    if (tasks.status === "result" && account) {
      const updatedUserAccount = {
        ...account,
        coins: account.coins + tasks.coins,
      };
      setAccount(updatedUserAccount);
      localStorage.setItem("account", JSON.stringify(updatedUserAccount));
    }
  }, [tasks.status, account]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <DayModeContext.Provider value={isDayMode}>
          <AccountContext.Provider value={account}>
            <div
              className={`"w-screen h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   text-white  " ${
                isDayMode ? "bg-cyan-50" : "bg-slate-900"
              }`}
            >
              <NavBar toggleDayMode={toggleDayMode} />
              <div
                className={`col-span-3 place-self-center md:mt-28 mt-20 `}
              >
                {tasks.status === "loading" && <Loader />}
                {tasks.status === "error" && <Error />}
                {tasks.status === "ready" &&
                  (account ? (
                    <StartScreen dispatch={dispatch} />
                  ) : (
                    <CreateAccount setAccount={setAccount} />
                  ))}
                {tasks.status === "active" && <Questions />}
                {tasks.status === "result" && <Result />}
              </div>
              <Footer />
              {/* <SpinWeel /> */}
              {/* <Coins /> */}
            </div>
          </AccountContext.Provider>
        </DayModeContext.Provider>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
