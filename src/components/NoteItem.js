import React from 'react';

const NoteItem = ({ note, deleteNote, setEditingNote }) => {
    return (
        <li>
            <h2>{note.title}</h2>
            <p>{note.body.substring(0, 50)}...</p>
            <div className="button-container">
                <button className="edit" onClick={() => setEditingNote(note)}>Edit</button>
                <button className="delete" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
        </li>
    );
};

export default NoteItem;
