import { TodoList } from "./todoList";
import { TodoAdd } from "./todoAdd";
import useTodo from "./useTodos";


const initialState = [
    // {
    //     id : new Date().getTime() * 3,
    //     description : 'Recolectar la piedra del Poder',
    //     done : false
    // }
]

export const init = ()=>{
  return JSON.parse(localStorage.getItem('todos') || [])
}

const TodoApp = () => {

  const {todos, handleNewTodo, handleDeleteTodo, handleToogle} = useTodo()



  return (
    <>
      <h1>Todo App {todos.length} ,<small>pendientes : 2 </small></h1>
      <hr />

      <div>
          <TodoList todos = {todos} onDeleteTodo ={handleDeleteTodo} onToggleTodo = {handleToogle} />
      </div>

      <div>
        <h4>Agregar TODO</h4>
        <hr />
      <TodoAdd onNewTodo = {handleNewTodo}/>

      
      </div>
    </>
  );
};

export default TodoApp;
