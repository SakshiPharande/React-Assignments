import Todo from "./todo";

interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
}

export default TodoContextType;
