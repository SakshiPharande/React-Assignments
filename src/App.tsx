import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List'
import { TodoProvider } from './contexts/TodoContext'
import Navbar from './Navbar/Navbar'


// Import your component

function App() {
  return (
    <>
   <TodoProvider>
      <BrowserRouter>
        <Navbar /> 
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
