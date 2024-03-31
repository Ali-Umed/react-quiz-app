import Questions from "./Questions";

function App() {
  return (
    <div
      id="questions_container"
      className="w-screen h-screen flex justify-center items-center bg-slate-900 text-white px-2 py-5 overflow-hidden"
    >
      <Questions />
    </div>
  );
}

export default App;
