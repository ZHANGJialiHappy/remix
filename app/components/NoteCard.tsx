import { NoteState } from '~/routes/notes';
import daisy from '../pic/daisy.png';

interface Props {
  note: NoteState
}

function NoteCard({ note }: Props) {
  return (
      <div className="relative card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={daisy} alt="daisy" /></figure>
        <div className="card-body">
          <h2 className="card-title">{note.title}</h2>
          <div className="overflow-y-hidden">
          <p>{note.content}</p>
          </div>
          <div className="absolute card-actions justify-end right-8 bottom-8">
            <button className="btn btn-outline btn-warning">see more</button>
          </div>
        </div>
      </div>
  )
}

export default NoteCard;
