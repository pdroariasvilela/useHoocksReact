import useForm from "./customHooks/useForm"
import Message from "./useEffect/message"

function FormSubmit() {
    const {formState , handleOnchage , email , password , onReset} = useForm({

        email: '',
        password: ''
    
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
      }

     
      return (
        <>
            <h1>Formulario</h1>
            <hr />
            <form onSubmit={handleSubmit}> 
                <input name="email" type="email" placeholder="Email" value={email} onChange={handleOnchage} />
                <input name="password" type="password" placeholder="Contraseña" value={password} onChange={handleOnchage}/>
                <input type="submit" value="Enviar" />

                <button onClick={onReset} >Borrar</button>
            </form> 

            {
               (email === 'pedro@mail.com') && <Message />
            }
    
            <br />
    
        </>
      )
}

export default FormSubmit;