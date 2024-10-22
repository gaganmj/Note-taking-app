import React, { useState, useEffect } from 'react';

const NoteEditor = ({ addNote, updateNote, editingNote, setEditingNote }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setBody(editingNote.body);
        } else {
            setTitle('');
            setBody('');
        }
    }, [editingNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingNote) {
            updateNote({ ...editingNote, title, body });
        } else {
            addNote({ id: Date.now(), title, body });
        }
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
};

export default NoteEditor;
