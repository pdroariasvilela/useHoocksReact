import { useState } from "react";

function useForm(initilValues = {}) {

    const [formState , setFormState] = useState(initilValues)
    

  const handleOnchage = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const onReset = () => {
    setFormState(initilValues)
  }
 

    return {
        ...formState,
        formState,
        handleOnchage,
        onReset
    };
}

export default useForm;