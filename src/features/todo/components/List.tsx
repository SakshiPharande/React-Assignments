import Navbar from "../../../components/Navbar/Navbar";
import { useTodo } from "../context/TodoContext";

const List = () => {
    const { todos, deleteTodo, toggleTodoStatus } = useTodo();
  return (
    <>
        <Navbar/>
        <div><h1>List</h1></div>
        <ul> 
            {todos.slice().reverse().map((todo,index)=>(
               <li key={index}>
               <strong>{todo.title}</strong> - {todo.date} <br />
               {todo.description}
               <div style={{ marginTop: "5px" }}>
                 <button onClick={() => deleteTodo(todo.title)}>Delete</button>
                 <button onClick={() => toggleTodoStatus(todo.title)}>
                   {todo.completed ? "✅ Done" : "❌ Pending"}
                 </button>
               </div>
             </li>
          ))}
        </ul>
    </>
  )
}

export default List