import React, { useState } from "react";
import Coins from "./Coins";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Questions from "./Questions";
import SpinWeel from "./SpinWheel";

function App() {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div className="flex">
      <div className="w-screen h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center bg-slate-900 text-white px-2 py-5">
        <div className="col-span-3">
          <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
        </div>
        <div className="col-span-3 place-self-center">
          {/* <SpinWeel /> */}

          <Questions />
        </div>
        <Footer />
        {/* <Coins /> */}
      </div>
    </div>
  );
}

export default App;
