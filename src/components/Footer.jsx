import { useContext } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { DayModeContext } from "../context/TasksConteext";

export default function Footer() {
  const isDayMode = useContext(DayModeContext);
  return (
    <footer
      className={`col-span-3 rounded-b-xl shadow-lg mt-8 py-6 ${
        isDayMode ? "bg-white" : "bg-slate-900"
      }`}
      id="footer"
    >
      <div className={` ${isDayMode ? "bg-white" : "bg-[#00000000]"}   pt-1`}>
        <div
          className={`container m-auto space-y-8 px-6 text-gray-600  md:px-12 lg:px-20   ${
            isDayMode ? "bg-white" : "bg-[#00000000]"
          }`}
        >
          <div
            className={`grid grid-cols-8 gap-0 md:gap-0  ${
              isDayMode ? "bg-white" : "bg-[#00000000]"
            }  `}
          >
            <div
              className={` ${
                isDayMode
                  ? "border-b border-b-black border-opacity-40"
                  : "border-b border-b-gray-600"
              } col-span-8   md:col-span-1 border-b border-b-black md:border-none lg:col-span-3 `}
            >
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <AiOutlineQuestionCircle className="h-8 w-8 text-teal-500" />
                  <span className="font-bold text-lg text-teal-500">
                    Quiz App
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-7 md:col-span-6 lg:col-span-5 ">
              <div
                className={`flex justify-between  py-2 pb-8 md:pl-16  ${
                  isDayMode ? "bg-white" : "bg-[#00000000]"
                }  `}
              >
                <span className="text-gray-500">&copy; Quiz App 2024</span>
                <div className="flex gap-4">
                  <a
                    target="blank"
                    aria-label="github"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a target="blank" className="hover:text-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a className="hover:text-cyan-600" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </a>

                  <a className="hover:text-cyan-600" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a className="hover:text-cyan-600" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="26"
                      fill="currentColor"
                      viewBox="0 1 18 24"
                    >
                      <path d="M21.001 2.999c-2.165-.174-8.605-.187-10.998-.188h-.002c-2.392 0-8.832.014-11 .188-1.656.133-3 1.443-3 3.124v11.495c0 1.68 1.344 2.99 3 3.124 1.767.142 7.399.16 10 .176 2.6-.016 8.232-.034 10-.176 1.656-.134 3-1.444 3-3.124v-11.495c0-1.68-1.344-2.991-3-3.124zm-14 14v-8l8 4-8 4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
