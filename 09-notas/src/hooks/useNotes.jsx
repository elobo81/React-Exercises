import { useState } from "react";

const list = [
    {title:"Hola", message:"Mundo", id:"123"},
    {title:"Hola de nuevo", message:"Mundo Mundial", id:"124"}
];

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes(){
    const [notes, setNotes] = useState(list);

    function add(title, message){
        const id = Date.now();
        const noteObject = { title, message, id };
        setNotes([noteObject, ...notes]);
    }

    return{
        notes
    }
}

export default useNotes;