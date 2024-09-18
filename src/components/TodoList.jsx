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
    <div className="">
      <p>Learn JavaScript basics</p>
      <button></button>
    </div>
  );
}
