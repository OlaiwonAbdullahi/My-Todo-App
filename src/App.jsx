import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null); // Track which task is being edited

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function editTask(id, newName) {
    const editedTaskList = items.map((item) => {
      if (id === item.id) {
        return { ...item, task: newName };
      }
      return item;
    });
    setItems(editedTaskList);
    setEditId(null); // Reset edit mode after editing
  }

  return (
    <div className="h-full bg-bgColor text-textColor">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList
        items={items}
        onDeleteItem={handleDeleteItem}
        editTask={editTask}
        editId={editId}
        setEditId={setEditId}
      />
      <Sorting />
    </div>
  );
}

export default App;
