import { NoteState } from "./NewNote";
import Note from "./Note";

interface Props {
    notes: NoteState[];
}
function NoteList({notes}: Props) {
    return (
        <div>
            {notes.map((note, key: number) => {
                return <Note/>;
            })}
        </div>
    )
}

export default NoteList;
