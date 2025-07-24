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
        allQuestions: action.payload,
        questions: [],
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      const filtered = state.allQuestions.filter(
        (q) => q.type?.toLowerCase() === action.questionType.toLowerCase()
      );
      return {
        ...state,
        questions: randomQuestions(filtered, Math.min(10, filtered.length)),
        status: filtered.length ? "active" : "error",
        sec_remaining: sec_per_questions * Math.min(10, filtered.length),
        index: 0,
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

function randomQuestions(questions, count = 10) {
  const arr = questions.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
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
              className={`min-h-screen w-full grid grid-cols-1 md:grid-cols-3 bg-gradient-to-br ${
                isDayMode
                  ? "from-cyan-50 via-white to-cyan-100"
                  : "from-slate-900 via-slate-800 to-slate-900"
              }`}
            >
              <NavBar toggleDayMode={toggleDayMode} />
              <div className="col-span-3 flex flex-col items-center justify-center min-h-[80vh] py-10">
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
