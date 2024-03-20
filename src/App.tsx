import { Winning } from "./components/Winning";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="flex flex-col items-center w-96 h-96 bg-white shadow-xl rounded-xl p-6">
        <p className="text-lg font-semibold mb-4">
          How many salah do Muslims pray each day?
        </p>
        <ul className="w-full">
          <li className="w-full py-2 px-4 bg-teal-100 rounded-lg mb-2 text-teal-700 text-center cursor-pointer transition-colors duration-300 hover:bg-teal-200">
            5
          </li>
          <li className="w-full py-2 px-4 bg-teal-100 rounded-lg mb-2 text-teal-700 text-center cursor-pointer transition-colors duration-300 hover:bg-teal-200">
            3
          </li>
          <li className="w-full py-2 px-4 bg-teal-100 rounded-lg mb-2 text-teal-700 text-center cursor-pointer transition-colors duration-300 hover:bg-teal-200">
            4
          </li>
          <li className="w-full py-2 px-4 bg-teal-100 rounded-lg mb-2 text-teal-700 text-center cursor-pointer transition-colors duration-300 hover:bg-teal-200">
            1
          </li>
        </ul>
        <button className="bg-teal-400 text-white py-2 px-4 rounded-lg mt-4 hover:bg-teal-500 transition-colors duration-300">
          Next Question
        </button>
      </div>
      <Winning />
    </div>
  );
}

export default App;
