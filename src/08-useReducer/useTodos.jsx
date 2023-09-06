import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { init } from "./todoApp"

function useTodo() {

const  [todos , dispatch ] = useReducer(todoReducer , [] , init)

useEffect(()=>{
   localStorage.setItem('todos' , JSON.stringify(todos))
},[todos])

  const handleNewTodo = (todo)=>{
    const action = {
      type : '[Todo] add new Todo' , 
      payload : todo
    }

    dispatch(action )
    
  }

  const handleDeleteTodo = (id)=>{
      dispatch ({
      type : '[Todo] delete todo',
      payload : id
     })

  // console.log({id})    
  }

  const handleToogle = (id)=>{
    dispatch ({
    type : '[Todo] toggle todo',
    payload : id
   })
  }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToogle
    };
} 

export default useTodo;

