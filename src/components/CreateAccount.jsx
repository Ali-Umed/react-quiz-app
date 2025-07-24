import * as Avatar from "@radix-ui/react-avatar";
import femaleRabit from "../images/femaleRabit.png";
import maleRabit from "../images/maleRabit.png";
import { useContext, useState } from "react";
import { DayModeContext } from "../context/TasksConteext";

function CreateAccount({ setAccount }) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const isDayMode = useContext(DayModeContext);

  const handleSubmit = async () => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password ");
      return;
    }
    const account = {
      username: username,
      password: password,
      isDayMode: isDayMode,
      coins: 0,
    };
    setAccount(account);
    localStorage.setItem("account", JSON.stringify(account));
  };

  return (
    <div
      className={`flex flex-col gap-8 items-center justify-center rounded-xl   p-8 max-w-md mx-auto mt-10 ${
        isDayMode ? "  text-black" : "  text-white"
      }`}
    >
      <div className="flex gap-8 justify-center"></div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={`p-3 rounded-full transition focus:outline-none ${
            isDayMode
              ? "bg-slate-100 text-black placeholder:text-gray-400"
              : "bg-slate-900 text-white placeholder:text-gray-400"
          }`}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={`p-3 rounded-full transition focus:outline-none ${
            isDayMode
              ? "bg-slate-100 text-black placeholder:text-gray-400"
              : "bg-slate-900 text-white placeholder:text-gray-400"
          }`}
        />
        <button
          type="submit"
          className="bg-teal-500 p-3 rounded-full text-white font-semibold hover:bg-teal-600 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
