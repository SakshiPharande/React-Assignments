import TodoType from "./types/todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
    getTodos(): TodoType[] {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [];
    },

    addTodo(text: string): TodoType {
        const todos = this.getTodos();
        const newTodo: TodoType = { id: todos.length + 1, text};
        const updatedTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return newTodo;
    },

    updateTodo(updatedTodo: TodoType): TodoType {
        const todos = this.getTodos().map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        return updatedTodo;
    },

    deleteTodo(id: number): void {
        const updatedTodos = this.getTodos().filter(todo => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
};

export default TodoService;
