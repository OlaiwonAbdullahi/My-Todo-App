import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" h-screen bg-bgColor text-textColor">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
