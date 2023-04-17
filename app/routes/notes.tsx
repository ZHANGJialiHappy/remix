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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "Title") {
      setTitle(event.target.value)
    } else {
      setContent(event.target.value)
    };
  };

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
          placeholder="Type here" 
          name="Title" 
          className="input input-bordered input-warning w-80 max-w-xs" 
          onChange={handleChange} 
          value={title}/>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <input
            name="Content"
            placeholder="Write your notes here&#10;No matter how much content you want to write"
            className="textarea textarea-warning w-full"
            onChange={handleChange}
            value={content}
            />
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