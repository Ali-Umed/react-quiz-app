import React, { useEffect, useReducer, useState } from "react";
import Coins from "./Coins";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Questions from "./Questions";
import SpinWeel from "./SpinWheel";
import Loader from "./Loader";

const initState = {
  questions: [],
  point: 0,
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
  }
}

function App() {
  const [{ questions, points, status }, dispatch] = useReducer(
    reducer,
    initState
  );

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
          {status == "ready" && <Questions />}
        </div>
        <Footer />
        {/* <Coins /> */}
      </div>
    </div>
  );
}

export default App;
