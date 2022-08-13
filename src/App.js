import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import ToDoList from "./components/ToDoList";


function App(props) {

  return (
    <div>
      <Counter />
      <hr />
      <TaskForm />
      <hr />
      <ToDoList />
    </div>
  );
}

export default App;
