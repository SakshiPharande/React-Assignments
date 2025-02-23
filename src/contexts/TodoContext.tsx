import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Todo from "../types/todo";

// Define the context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

// Create the context with an initial empty value
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider Component
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);


  // Load from Local Storage when the app starts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);
  

  // Save to Local Storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Ensure localStorage is updated
      return updatedTodos;
    });
  };
  

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
