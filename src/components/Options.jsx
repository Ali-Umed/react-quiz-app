import { BiCircle } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { HiCheckCircle } from "react-icons/hi";

export function Options() {
  const { questions, answer, index } = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const question = questions[index];
  const hasAnswer = answer != null;

  function getOptionSize(option) {
    const textSize = option.length;
    if (textSize < 35) {
      return "text-lg";
    }
    if (textSize > 40) {
      return "text-sm";
    }
    if (textSize > 35) {
      return "text-md";
    }
  }

  return (
    <section className="flex flex-col gap-3 min-h-60 max-h-60">
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
            className={`flex justify-between w-full ${getOptionSize(option)}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}

            {hasAnswer ? (
              (answer == index) & (index === question.correctOption) ? (
                <HiCheckCircle color="green" size={24} />
              ) : answer !== question.correctOption && answer == index ? (
                <CiCircleRemove color="green" size={24} />
              ) : index === question.correctOption ? (
                <HiCheckCircle color="green" size={24} />
              ) : (
                <BiCircle color="green" size={24} />
              )
            ) : (
              ""
            )}
          </button>
        </div>
      ))}
    </section>
  );
}
