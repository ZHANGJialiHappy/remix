import { NoteState } from '~/routes/notes';

import NoteCard from "./NoteCard";

interface Props {
    notes: NoteState[];
}
function NoteList({notes}: Props) {
    return (
        <div className="grid gap-10 auto-cols-[minmax(0,_2fr)] ml-10">
            {notes.map((note) => {
                return <NoteCard note={note} key={note.id}/>;
            })}
        </div>
    )
}

export default NoteList;
