import { HiCheckCircle } from "react-icons/hi";

export function Options({ question, answer, dispatch }) {
  const hasAnswer = answer != null;
  return (
    <section className="flex flex-col justify-center items-center gap-3">
      {question.options.map((option, index) => (
        <div
          key={option}
          className={`${
            hasAnswer
              ? (answer == index) & (index === question.correctOption)
                ? "selected"
                : answer !== question.correctOption && answer == index
                ? "unselected"
                : index === question.correctOption
                ? "selected"
                : "check"
              : "check"
          } 
        `}
        >
          <button
            className="flex justify-between w-full"
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
            <HiCheckCircle color="green" size={30} />
          </button>
        </div>
      ))}
    </section>
  );
}
