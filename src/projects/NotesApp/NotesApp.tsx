import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

interface Note {
  id: number
  text: string
}

const STORAGE_KEY = 'notes-app-data'

const NoteCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 280px;
  overflow: hidden;
`

const NoteToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
`

const ToolbarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  padding: 4px;

  &:hover {
    color: #333;
  }
`

const loadNotes = (): Note[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const NotesApp = () => {
  const [notes, setNotes] = useState<Note[]>(loadNotes)
  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  const addNote = useCallback(() => {
    const newNote: Note = { id: Date.now(), text: '' }
    setNotes((prev) => [...prev, newNote])
    setEditingId(newNote.id)
  }, [])

  const deleteNote = useCallback((id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id))
    setEditingId(null)
  }, [])

  const updateNote = useCallback((id: number, text: string) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, text } : n)))
  }, [])

  return (
    <div className='min-h-screen bg-[#7bdaf3] p-8'>
      <button
        type='button'
        className='fixed top-5 right-5 px-5 py-2 bg-[#9ec862] text-white border-none rounded-md cursor-pointer text-sm font-bold hover:bg-[#8ab955] transition-colors shadow-md'
        onClick={addNote}>
        + Add Note
      </button>
      <div className='flex flex-wrap gap-5 pt-16 justify-center'>
        {notes.map((note) => (
          <NoteCard key={note.id}>
            <NoteToolbar>
              <ToolbarButton
                type='button'
                onClick={() =>
                  setEditingId(editingId === note.id ? null : note.id)
                }>
                {editingId === note.id ? '📄' : '✏️'}
              </ToolbarButton>
              <ToolbarButton type='button' onClick={() => deleteNote(note.id)}>
                🗑️
              </ToolbarButton>
            </NoteToolbar>
            {editingId === note.id ? (
              <textarea
                value={note.text}
                onChange={(e) => updateNote(note.id, e.target.value)}
                className='w-full h-[200px] p-4 border-none outline-none resize-none text-sm font-sans'
                placeholder='Write your note here...'
              />
            ) : (
              <div
                role='button'
                tabIndex={0}
                className='p-4 min-h-[200px] text-sm text-gray-700 whitespace-pre-wrap cursor-pointer'
                onClick={() => setEditingId(note.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setEditingId(note.id)
                  }
                }}>
                {note.text || 'Empty note. Click to edit.'}
              </div>
            )}
          </NoteCard>
        ))}
      </div>
    </div>
  )
}

export default NotesApp
