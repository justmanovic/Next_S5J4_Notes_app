const Sidebar = (props) => {

  const sortedNotes = props.notes.sort((a, b) => b.lastModified - a.lastModified)

  return <div className="app-sidebar">
    <div className="app-sidebar-header">
      <h1>Jo's Notes</h1>
      <button onClick={props.onAddNote}>Add</button>
    </div>
    <div className="app-sidebar-notes">
      {sortedNotes.map(note => (
        <div className={`app-sidebar-note ${note.id === props.activeNote && "active"}`} onClick={() => props.setActiveNote(note.id)}>
          <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button onClick={() => props.onDeleteNote(note.id)}>Delete</button>
          </div>
          <p>{note.body && note.body.slice(0, 100) + "..."}</p>
          <small className="note-meta">Last modified [{new Date(note.lastModified).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" })}]</small>
        </div>
      ))}
    </div>
  </div>
}

export default Sidebar
