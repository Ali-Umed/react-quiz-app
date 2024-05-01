import { HiCheckCircle } from "react-icons/hi";

export function Options({ question, answer, dispatch }) {
  console.log(question.question);

  return (
    <section className="flex flex-col justify-center items-center gap-3">
      {question.options.map((option, index) => (
        <div
          key={option}
          className={`${
            answer == question.correctOption ? "selected" : "unselected"
          } 
        `}
        >
          <button
            className="flex justify-between w-full"
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
            <HiCheckCircle color="green" size={30} />
          </button>
        </div>
      ))}
    </section>
  );
}
