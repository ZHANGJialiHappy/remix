import { NoteState } from '~/routes/notes';

interface Props {
  note: NoteState,
  index: number
}

function NoteCard({ note, index }: Props) {
  return (
    <div className="relative card w-96 h-80 bg-yellow-100 bg-base-100 shadow-xl hover:shadow-[0_2.188rem_3.75rem_-0.938rem_rgba(0,0,0,0.5)]">
      <div className="card-body">
        <header>
          <ul className="card-actions">
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
            <button className="btn btn-circle btn-outline btn-warning btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </ul>
        </header>
        <h2 className="card-title">{note.title}</h2>
        <div className="overflow-scroll h-32">
          <p>{note.content}</p>
        </div>
        <div className="absolute card-actions right-8 bottom-8">
          <button className="btn btn-outline btn-warning">see more</button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard;
