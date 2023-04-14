import { NoteState } from '~/routes/notes';

import NoteCard from "./NoteCard";

interface Props {
    notes: NoteState[];
}
function NoteList({notes}: Props) {
    return (
        <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] ml-10">
            {notes.map((note) => {
                return <NoteCard note={note} key={note.id}/>;
            })}
        </div>
    )
}

export default NoteList;
