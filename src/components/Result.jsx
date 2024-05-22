import winner from "../../src/images/winner.png";

export default function Result({ points, dispatch, isDayMode }) {
  return (
    <div
      className={`${
        isDayMode ? "text-black" : "text-white"
      } flex flex-col text-center items-center `}
    >
      <img src={winner} alt="" className="w-80 ml-20" />
      <h1>Coins +{points}</h1>
      <div
        onClick={() => dispatch({ type: "finish" })}
        className="flex justify-center  items-center gap-1 mt-6 rounded-lg bg-teal-600 px-5 py-2 hover:cursor-pointer hover:bg-teal-500"
      >
        <button>Exit</button>
      </div>
    </div>
  );
}
