import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const App = () => {
    const [notes, setNotes] = useLocalStorage('notes', []);
    const [editingNote, setEditingNote] = useState(null);
    
    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const updateNote = (updatedNote) => {
        setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
        setEditingNote(null);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="app">
            <h1>Notes Application</h1>
            <NoteEditor
                addNote={addNote}
                updateNote={updateNote}
                editingNote={editingNote}
                setEditingNote={setEditingNote}
            />
            <NoteList notes={notes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
        </div>
    );
};

export default App;
