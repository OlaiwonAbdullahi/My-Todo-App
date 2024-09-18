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

  return (
    <div className="h-screen bg-bgColor text-textColor">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList items={items} />
      <Sorting />
    </div>
  );
}

export default App;
