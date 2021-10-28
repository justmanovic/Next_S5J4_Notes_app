import { useState, useEffect } from "react"
import uuid from "react-uuid"
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || [])
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Sans titre",
      body: "Blablabla",
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes])
    console.log("added")
  }

  const onDeleteNote = (noteId) => {
    console.log("note deleted!")
    setNotes(notes.filter(note => note.id !== noteId))
  }

  const getActiveNote = () => notes.find(note => note.id === activeNote)

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === activeNote) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotesArray)
  }

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App