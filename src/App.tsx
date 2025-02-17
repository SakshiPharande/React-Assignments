import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
