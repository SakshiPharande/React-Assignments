import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Todo from "../types/todo";
import TodoContextType from "../types/TodoContextType"; 

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const deleteTodo = (title: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.title !== title);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const toggleTodoStatus = (title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.title === title ? { ...todo, completed: !todo.completed } : todo
      )
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodoStatus }}>
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
