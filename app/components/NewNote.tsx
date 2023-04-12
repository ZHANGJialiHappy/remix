import background from '../pic/background.jpeg';

function NewNote() {
  return (

      <div className="card lg:card-side bg-base-50 shadow-xl">
        <figure><img className="h-96" src={background} alt="Notes" /></figure>
        <div className="card-body relative">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-80 max-w-xs" />
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea className="textarea textarea-warning w-full" placeholder="Write your notes here&#10;No matter how much content you want to write"></textarea>
          <div className="card-actions justify-end absolute bottom-8 right-8">
            <button className="btn btn-outline btn-warning">Add note</button>
          </div>
        </div>
      </div>



  )
}

export default NewNote;