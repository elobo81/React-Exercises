import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);
    return(
        <div>
            <p>
                Haz hecho click {counter} veces a este botón
            </p>
            <button onClick= { ()=>{ setCounter(counter+1) } }>INCREMENTAR</button>   
        </div>
    );
}

export default Counter;