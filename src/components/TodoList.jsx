const todos = [
  {
    id: 1,
    title: "Learn JavaScript basics",
    completed: false,
  },
  {
    id: 2,
    title: "Build a ToDo App",
    completed: false,
  },
  {
    id: 3,
    title: "Practice ReactJS",
    completed: true,
  },
  {
    id: 4,
    title: "Read about Web3",
    completed: false,
  },
  {
    id: 5,
    title: "Work on portfolio website",
    completed: true,
  },
];

export default function TodoList() {
  const todo = todos;
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {todo.map((todolist) => (
          <Todo todolist={todolist} key={todolist.id} />
        ))}
      </div>
    </div>
  );
}

function Todo({ todolist }) {
  return (
    <div className="border-hrColor border pb-2 px-2 w-full sm:w-72 font-titalium mt-5 shadow-lg rounded-md bg-bgColor">
      <div className="flex justify-between gap-3 items-center">
        <p className="mb-4 whitespace-nowrap text-lg sm:text-base mt-3">
          {todolist.title}
        </p>
        <input
          type="checkbox"
          checked={todolist.completed}
          className="w-4 h-4 sm:w-3 sm:h-3 bg-bgColor border-2 border-hrColor rounded-sm accent-hrColor"
        />
      </div>
      <div className="flex gap-2 justify-between">
        <button className="bg-bgColor rounded-md border p-2 w-20 sm:w-16 lg:w-14 border-hrColor text-xs sm:text-sm h-8">
          Edit
        </button>
        <button className="bg-red-500 text-white rounded-md p-2 w-20 sm:w-16 lg:w-14 text-xs sm:text-sm h-8">
          Delete
        </button>
      </div>
    </div>
  );
}
