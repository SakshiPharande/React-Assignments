import { TodoProvider } from './features/todo/context/TodoContext'
import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <>
      <TodoProvider>
        <AppRoutes/>
      </TodoProvider>
    </>
     
  )
}

export default App
