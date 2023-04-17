import { NoteState } from '~/routes/notes';
// import NoteCard from "./NoteCard";

interface Props {
    notes: NoteState[];
    deleteNote(id: string): void
}
function NoteList({ notes, deleteNote }: Props) {
    return (
        <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ml-10">
            {notes.map((note, index) => {
                return (
                    <div 
                    key={note.id}
                    className="relative card w-96 h-80 bg-yellow-100 bg-base-100 shadow-xl hover:shadow-[0_2.188rem_3.75rem_-0.938rem_rgba(0,0,0,0.5)]">
                        <div className="card-body">
                            <header>
                                <ul className="card-actions items-end">
                                    <li className="grow">#{index + 1}</li>
                                    <li>
                                        <time dateTime={note.id}>
                                            {new Date(note.id).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </time>
                                    </li>
                                    <button 
                                    onClick={() => deleteNote(note.id)}
                                    className="btn btn-circle btn-outline btn-warning btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </ul>
                            </header>
                            <h2 className="card-title">{note.title}</h2>
                            <div className="overflow-scroll h-44">
                                <p>{note.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NoteList;
