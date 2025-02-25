import { createBrowserRouter } from "react-router-dom";
import List from "../features/todo/components/List";
import AddTodo from "../features/todo/components/AddTodo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/addTodo",
    element: <AddTodo />,
  }
  // {
  //   path : "/navbar",
  //   element : <Navbar/>
  // }
]);

export default router;
