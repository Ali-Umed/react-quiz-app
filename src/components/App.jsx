import Coins from "./Coins";
import Questions from "./Questions";

function App() {
  return (
    <div className="flex">
    <div className="w-3/4">
      <div className="w-full h-screen flex justify-center items-center bg-slate-900 text-white px-2 py-5">
        <Questions />
      </div>
    </div>
    <div className="w-1/4 bg-slate-800">
      <Coins />
    </div>
  </div>
  );
}

export default App;
