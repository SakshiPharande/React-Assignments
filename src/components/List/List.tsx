import { useTodo } from "../../contexts/TodoContext"

const List = () => {
    const { todos, deleteTodo, toggleTodoStatus } = useTodo();
  return (
    <>
        <div>List</div>
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