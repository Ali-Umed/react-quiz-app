import Footer from "./Footer";
import Questions from "./Questions";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="w-screen h-screen  justify-center     grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center bg-slate-900 text-white px-2 py-5">
        <div className=" col-span-3 place-self-center">
          <Questions />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
