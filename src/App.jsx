import Form from "./components/Form";
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" h-screen bg-bgColor text-textColor ">
      <Header />
      <Form />
      <TodoList />
      <Sorting />
    </div>
  );
}

export default App;
