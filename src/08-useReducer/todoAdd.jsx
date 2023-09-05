import useForm from "../customHooks/useForm"

export const TodoAdd = ({onNewTodo})=>{


    const {description , handleOnchage  , formState} = useForm({

        description : ''
    
    })

    const onFormSubmit = (e)=>{
        e.preventDefault()

    if(description.length <= 1 ) return;
        
    const newTodo = {
        id : new Date().getTime(),
        description : description,
        done : false
    }

    onNewTodo(newTodo)

    }

    return (

        <form onSubmit={onFormSubmit} >
            <input 
            name = "description"
            type="text"
            placeholder="¿Que hay que hacer?"
            value={description}
            onChange={handleOnchage}
            />

            <button 
            type="submit">
                Agregar 
            </button>

        </form>
    
    )
}