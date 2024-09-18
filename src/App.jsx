import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]); // Add new item to the state
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="h-screen bg-bgColor text-textColor">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList
        items={items}
        onDeleteItem={handleDeleteItem}
        editTask={editTask}
      />
      <Sorting />
    </div>
  );
}

export default App;
