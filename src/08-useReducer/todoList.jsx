import useForm from "../customHooks/useForm"

export const TodoList = ({todos = [] , onDeleteTodo , onToggleTodo }) =>{


    return(
        <ul>
        {
          todos.map(todo=>(

        <li key={todo.id} >
          <span onClick={() => onToggleTodo(todo.id)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.description}</span>

          <button onClick={ () => onDeleteTodo(todo.id)}>Borrar</button>
        </li>
          ))
        }

      </ul>
    )
}