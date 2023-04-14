import { NoteState } from '~/routes/notes';
import daisy from '../pic/daisy.png';

interface Props {
  note: NoteState
}

function NoteCard({note}:  Props) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={daisy} alt="daisy" /></figure>
  <div className="card-body">
    <h2 className="card-title">{note.title}</h2>
    <p>{note.content}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning">see more</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default NoteCard;
