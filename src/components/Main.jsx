

const Main = () => {
  return (
    <div className="app-name">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Note un truc !" cols="150"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>
      </div>
    </div>
  )
}

export default Main