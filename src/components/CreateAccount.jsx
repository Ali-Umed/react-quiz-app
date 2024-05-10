import * as Avatar from "@radix-ui/react-avatar";
import femaleRabit from "../images/femaleRabit.png";
import maleRabit from "../images/maleRabit.png";
import { useState } from "react";

function CreateAccount({ setHaveAnAccount }) {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    setHaveAnAccount(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 justify-center">
        <div className="flex flex-col ">
          <span className={` text-black mb-3 `}>Male</span>
          <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              onClick={() => setGender("male")}
              className={`" h-full w-full rounded-[inherit] object-cover cursor-pointer "  ${
                gender == "male"
                  ? " shadow-lg border-2 border-teal-500  shadow-red-500 "
                  : ""
              }`}
              src={maleRabit}
              alt="Colm Tuite"
            />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              CT
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <div className="flex flex-col ">
          <span className={`" text-black mb-3 "  `}>Female</span>
          <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              onClick={() => setGender("female")}
              className={`" cursor-pointer h-full w-full rounded-[inherit] object-cover "  ${
                gender == "female"
                  ? " shadow-lg border-2 border-teal-500  shadow-red-500 "
                  : ""
              }`}
              src={femaleRabit}
              alt="Pedro Duarte"
            />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              JD
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 border border-gray-300 text-black rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 border border-gray-300 text-black rounded-md"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
