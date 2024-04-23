import Coins from "./Coins";
import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Questions from "./Questions";
import SpinWeel from "./SpinWheel.jsx";

function App() {
  const [isDayMode, setIsDayMode] = useState(true);
  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };


    <div className="flex">
    <div className="w-3/4">
      <div className="w-full h-screen flex justify-center items-center bg-slate-900 text-white px-2 py-5">
        <Questions />

    <div className="min-h-max flex justify-center items-center ">
      <div className="w-screen h-full justify-center     grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center bg-slate-900 text-white px-2 py-5">
        <div className="col-span-3 ">
          <NavBar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />
        </div>
        <div className=" col-span-3 place-self-center">
          <SpinWeel />
          <Questions />
        </div>
        <Footer />

      </div>
    </div>
    <div className="w-1/4 bg-slate-800">

    </div>
  </div>
  </div>
  ; </div>
)}

export default App;
