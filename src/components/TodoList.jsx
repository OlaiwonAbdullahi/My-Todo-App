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
  return (
    <div className="">
      <Todo />
    </div>
  );
}

function Todo() {
  return (
    <div className="border-hrColor border p-2 w-full sm:w-44 font-titalium">
      <div className="flex justify-between gap-3">
        <p className="mb-4 whitespace-nowrap">Learn JavaScript basics</p>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2 justify-between">
        <button className="bg-bgColor rounded-md border p-1 w-16 sm:w-12 border-hrColor text-sm">
          Edit
        </button>
        <button className="bg-red-500 text-white rounded-md p-1 w-16 sm:w-12 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}
