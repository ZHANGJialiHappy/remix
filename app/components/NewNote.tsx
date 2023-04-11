function NewNote() {
  return (
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
  <label className="label">
    <span className="label-text">Content</span>
  </label>
  <textarea className="textarea textarea-warning" placeholder="Bio"></textarea>
  <button className="btn btn-warning my-5">Add note</button>
</div>
  )
}

export default NewNote