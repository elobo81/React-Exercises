import { useEffect, useState } from "react";

// const list = [
//     {title:"Hola", message:"Mundo", id:"123"},
//     {title:"Hola de nuevo", message:"Mundo Mundial", id:"124"}
// ];

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes(){
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        let localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);
        if(localStorageSavedNotes){
            setNotes(
                JSON.parse(localStorageSavedNotes)
            )
        }
    }, []);

    useEffect(()=>{
        if(!notes || notes.length == 0) return;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
    }, [notes]);
    
    function add(title, message){
        const id = Date.now();
        const noteObject = { title, message, id };
        setNotes([noteObject, ...notes]);
    }

    function remove(id){
        let NewNotes = notes.filter( note => note.id !== id );
        setNotes(NewNotes);
    }

    return{
        notes,
        add,
        remove
    }
}

export default useNotes;