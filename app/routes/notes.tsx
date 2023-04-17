import { ChangeEvent, useState } from 'react';
import NoteList from '~/components/NoteList';
import background from '../pic/sidePic.jpeg';

export type NoteState = {
  title: string;
  content: string;
  id: string;
}
function NotesPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [notes, setNotes] = useState<NoteState[]>([]);

  const addNote = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    debugger;
    if ((!title || /^\s*$/.test(title)) || (!content || /^\s*$/.test(content))) {
      return
    }
    const newNote = { title, content, id: ` ${new Date()}` }
    const newNoteList = [newNote, ...notes];
    setNotes(newNoteList);
    setTitle("");
    setContent("");
  }
  return (
    <main  >
      <div className="flex m-5 justify-center items-center text-center">
      <form className="flex justify-center card lg:card-side bg-base-50 shadow-xl" onSubmit={addNote}>
        <figure><img className="h-96" src={background} alt="Notes"/></figure>
        <div className="card-body relative">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input 
          type="text" 
          placeholder="Max 10 charactors" 
          name="Title" 
          maxLength={10}
          className="input input-bordered input-warning w-80 max-w-xs" 
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {setTitle(event.target.value)}} 
          value={title}/>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea             
            name="Content"
            placeholder="Write your notes here&#10;No matter how much content you want to write"
            className="textarea textarea-warning w-full"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {setContent(event.target.value)}} 
            value={content}></textarea>
            {/* textarea */}

          <div className="card-actions justify-end absolute bottom-8 right-8">
            <button className="btn btn-outline btn-warning">Add note</button>
          </div>
        </div>
      </form>

      </div>
      <div>
        <NoteList notes={notes} />
      </div>
    </main>
  )
}

export default NotesPage