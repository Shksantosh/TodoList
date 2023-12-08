import { useReducer, useState } from "react"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./context/TodoContext"
import TodotDispatchContex from "./context/TodoDispatchContex"
import todoReducer from "./reducers/TodoReducers"

function App() {
 
  const [list, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{list}}>
    <TodotDispatchContex.Provider value={{dispatch}}>
      <AddTodo />
      <TodoList  />
      </TodotDispatchContex.Provider>
    </TodoContext.Provider>
  )
}

export default App
