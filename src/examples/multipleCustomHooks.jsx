import { useCounter } from "../customHooks/useCounter";
import useFetch from "../useEffect/useFetch";
import LoadingQuote from "../components/loadingQuote";
import Quotes from "../components/quotes";

export const MultipleCustomHooks = () => {
    const { counter , incremental} = useCounter(1)
    
    const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}/`
  );
  console.log({ data, isLoading, hasError });

    const {name , base_experience} = !!data && data




  return (
    <div>
      <h1>PokeApi</h1>
      <hr />

      {isLoading ? 
        <LoadingQuote/>
      : 
        <Quotes name = {name} base_experience={base_experience}/>
      }

    <button onClick={()=> incremental() }>Next</button>
    
    </div>

  );
};
