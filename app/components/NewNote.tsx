import { ChangeEvent, useState } from 'react';
import background from '../pic/sidePic.jpeg';
import NoteList from './NoteList';

export type NoteState = {
  title: string;
  content: string;
  id: number;
}

function NewNote() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [notes, setNotes] = useState<NoteState[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "Title") {
      setTitle(event.target.value)
    } else {
      setContent(event.target.value)
    };
  };

  const addNote = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if ((!title || /^\s*$/.test(title)) || (!content || /^\s*$/.test(content))) {
      return
    }
    const newNote= { title, content, id: Math.random() }
    const newNoteList = [newNote, ...notes];
    setNotes(newNoteList);
    setTitle("");
    setContent("");
  }

  return (
      <form className="card lg:card-side bg-base-50 shadow-xl" onSubmit={addNote}>
        <figure><img className="h-96" src={background} alt="Notes" /></figure>
        <div className="card-body relative">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Type here" name="TaskName" className="input input-bordered input-warning w-80 max-w-xs" onChange={handleChange}/>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
          name="Content"
          placeholder="Write your notes here&#10;No matter how much content you want to write"
          className="textarea textarea-warning w-full"></textarea>
          <div className="card-actions justify-end absolute bottom-8 right-8">
            <button className="btn btn-outline btn-warning">Add note</button>
          </div>
          <div>
          <NoteList notes={notes}/>
          </div>
        </div>
      </form>
  )
}

export default NewNote;