import { useState } from "react";

export default function Form({ onAddItems }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    const newTask = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTask("");
    onAddItems(newTask);
    console.log(newTask);
  }

  return (
    <form
      className="mt-8 flex justify-center font-titalium mb-8"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-bgColor border rounded-l-md max-w-full w-3/4 md:w-1/3 text-textColor p-2"
      />
      <button className="border border-textColor rounded-e-lg p-1 w-20">
        Add
      </button>
    </form>
  );
}
