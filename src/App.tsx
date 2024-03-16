function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="flex flex-col   w-96 h-96 bg-teal-50">
        <p className="text-black mt-2 text-center">How many salah in day?</p>
        <div>
          <ul className="">
            <li className="pl-5 mt-4 bg-lime-100 rounded-xl">5</li>
            <li className="pl-5 mt-4 bg-lime-100 rounded-xl">3</li>
            <li className="pl-5 mt-4 bg-lime-100 rounded-xl">4</li>
            <li className="pl-5  mt-4 bg-lime-100 rounded-xl">1</li>
          </ul>
        </div>
        <button className="bg-teal-300 w-28 self-center mt-5 rounded-2xl">
          next question
        </button>
      </div>
    </div>
  );
}

export default App;
