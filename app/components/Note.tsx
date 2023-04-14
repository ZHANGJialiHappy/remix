import daisy from '../pic/daisy.png';
import { NoteState } from './NewNote';

interface Props {
  note: NoteState
}

function Note({note}:  Props) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={daisy} alt="daisy" /></figure>
  <div className="card-body">
    <h2 className="card-title">{note.title}</h2>
    <p>{note.content}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see more</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Note;
