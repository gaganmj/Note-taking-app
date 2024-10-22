import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
    return (
        <ul>
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    setEditingNote={setEditingNote}
                />
            ))}
        </ul>
    );
};

export default NoteList;
