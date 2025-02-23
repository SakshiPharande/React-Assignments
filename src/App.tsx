import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List'
import { TodoProvider } from './contexts/TodoContext'


// Import your component

function App() {
  return (
    <>
    <TodoProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
      </TodoProvider>
    </>
  )
}

export default App
