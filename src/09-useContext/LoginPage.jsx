import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function LoginPage() {

    const {user , setUser } = useContext(UserContext)
    // console.log(user)
    return ( 
        <>
            <h1>LoginPage</h1>
            
            <hr />

            <pre>
                {JSON.stringify(user , null , 3)}
            </pre>

            <button 
            onClick={()=>{
                if(!user){
                    setUser({
                        id : 1,
                        name : 'Pedro',
                        mail : 'pedro@mail.com'
                    })
                }else{
                    setUser()
                }
            }}
            className="btn btn-primary">
                Establecer Usuario 
            </button>
        </>
     );
}

export default LoginPage;