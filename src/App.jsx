import React, { useEffect, useReducer, useState } from "react";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Questions from "./components/Questions";
import SpinWeel from "./components/SpinWheel";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";

const sec_per_questions = 30;

const initState = {
  questions: [],
  point: 0,
  status: "loading",
  sec_remaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "start":
      return {
        ...state,
        status: "active",
        sec_remaining: state.questions.length * sec_per_questions,
      };
  }
}

function App() {
  const [{ questions, points, status, sec_remaining }, dispatch] = useReducer(
    reducer,
    initState
  );

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
    <div className="flex">
      <div className="w-screen h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center bg-slate-900 text-white px-2 py-5">
        <div className="col-span-3">
          <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
        </div>
        <div className="col-span-3 place-self-center">
          {/* <SpinWeel /> */}
          {status == "loading" && <Loader />}
          {status == "ready" && (
            <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
          )}
          {status == "active" && <Questions sec_remaining={sec_remaining} />}
        </div>
        <Footer />
        {/* <Coins /> */}
      </div>
    </div>
  );
}

export default App;
