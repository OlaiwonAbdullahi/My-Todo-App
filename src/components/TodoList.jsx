import { useState } from "react";

export default function TodoList({ items }) {
  const [todos, setTodos] = useState(items); // Initialize state with items prop

  const handleChecked = (id) => {
    // Toggle completion status
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onChecked={handleChecked} />
        ))}
      </div>
    </div>
  );
}

function Todo({ item, onChecked }) {
  return (
    <div className="border-hrColor border pb-2 px-2 w-full sm:w-72 font-titalium mt-5 shadow-lg rounded-md bg-bgColor">
      <div className="flex justify-between gap-3 items-center">
        <p className="mb-4 whitespace-nowrap text-lg sm:text-base mt-3">
          {item.task}
        </p>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onChecked(item.id)} // Toggle completion
          className="w-4 h-4 sm:w-3 sm:h-3 bg-bgColor border-2 border-hrColor rounded-sm accent-hrColor"
        />
      </div>
      <div className="flex gap-2 justify-between">
        <button className="bg-bgColor rounded-md border p-2 w-full sm:w-24 md:w-20 lg:w-16 border-hrColor text-xs sm:text-sm md:text-base h-10">
          Edit
        </button>

        <button className="bg-red-500 text-white rounded-md p-2 w-full sm:w-24 md:w-20 lg:w-16 text-xs sm:text-sm md:text-base h-10">
          Delete
        </button>
      </div>
    </div>
  );
}
