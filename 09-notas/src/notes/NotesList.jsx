import Note from "./Note";

const list = [
    {title:"Hola", message:"Mundo", id:"123"},
    {title:"Hola de nuevo", message:"Mundo Mundial", id:"124"}
];

function NotesList () {
return (
    <div>
        {
            list.map(note => <Note key={note.id} title={note.title} message={note.message} />)
        }
    </div>
)
}

export default NotesList;