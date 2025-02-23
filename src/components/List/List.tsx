import { useTodo } from "../../contexts/TodoContext"

const List = () => {
    const {todos} = useTodo();
  return (
    <>
        <div>List</div>
        <ul>
            {todos.map((todo,index)=>(<li key={index}>
                <strong>{todo.title}</strong>
                <strong>{todo.description}</strong>
                <strong>{todo.completed}</strong>
            </li>))}
        </ul>
    </>
  )
}

export default List