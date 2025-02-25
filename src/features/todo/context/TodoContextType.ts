import Todo from "../types/todo";

interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (title: string) => void; 
    toggleTodoStatus: (title: string) => void;
}

export default TodoContextType;
