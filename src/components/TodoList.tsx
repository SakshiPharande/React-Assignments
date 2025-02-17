import { useState } from "react";
import TodoType from "../types/todo";
import TodoService from "../TodoService";

const TodoList = () => {
    const [todos, setTodos] = useState<TodoType[]>(TodoService.getTodos());
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("");

    // Add new todo
    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            const newTodo = TodoService.addTodo(newTodoText);
            setTodos([...todos, newTodo]);
            setNewTodoText("");
        }
    };

    // Start editing a todo
    const handleEditStart = (id: number, text: string) => {
        setEditingTodoId(id);
        setEditedTodoText(text);
    };

    // Cancel editing
    const handleEditCancel = () => {
        setEditingTodoId(null);
        setEditedTodoText("");
    };

    // Save edited todo
    const handleEditSave = (id: number) => {
        if (editedTodoText.trim() !== "") {
            const updatedTodo = TodoService.updateTodo({
                id,
                text: editedTodoText
            });

            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)));
            handleEditCancel();
        }
    };

    // Delete a todo
    const handleDeleteTodo = (id: number) => {
        TodoService.deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {/* Input box to add todo */}
            <div>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            {/* Display todo list */}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editingTodoId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTodoText}
                                    onChange={(e) => setEditedTodoText(e.target.value)}
                                />
                                <button onClick={() => handleEditSave(todo.id)}>Save</button>
                                <button onClick={handleEditCancel}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <button onClick={() => handleEditStart(todo.id, todo.text)}>Edit</button>
                                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
