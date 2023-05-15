import { useEffect, useState } from "react";

function Countdown (){
let [targetSeconds, setTargedSeconds] = useState(null);
let [elapsedSeconds, setElapsedSeconds] = useState(0);

useEffect(() => {
    if(targetSeconds === null) {
        return;
    }

setElapsedSeconds(0);

let interval = setInterval(() => {
    setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
}, 1000);

return () => {
    clearInterval(interval);
}
}, [targetSeconds]);

function parseForm(ev){
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
   setTargedSeconds(parseInt(seconds));
}    

if(elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return(
            <div className="">
                <p>Terminó el conteo!!!</p>
                <button onClick= { () => setTargedSeconds(null) }>RESET</button>
            </div>
    )
}

if(targetSeconds !== null) {
    return(
        <p>Faltan {targetSeconds - elapsedSeconds} segundos</p>
    );
}

    return(
    <div>
        <p>¿Cuántos segundos quieres contar?</p>
        <form action="#" onSubmit={ ev => parseForm(ev) }>
            <input type="number" name="seconds" />
            <button>Iniciar</button>
        </form>
    </div>
    );
}
export default Countdown;